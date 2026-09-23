// Java 17: a small value object, not a complete currency library.
record Money(long minorUnits, String currency) {
    Money {
        if (currency == null || currency.isBlank())
            throw new IllegalArgumentException("currency required");
    }
    Money plus(Money other) {
        if (!currency.equals(other.currency()))
            throw new IllegalArgumentException("currency mismatch");
        return new Money(Math.addExact(minorUnits, other.minorUnits()), currency);
    }
}

interface PaymentGateway {
    PaymentResult charge(String operationId, Money amount);
}
record PaymentResult(String reference, boolean accepted) {}

final class CheckoutService {
    private final PaymentGateway gateway;
    CheckoutService(PaymentGateway gateway) {
        this.gateway = java.util.Objects.requireNonNull(gateway);
    }
    PaymentResult pay(String orderId, Money total) {
        return gateway.charge(orderId, total);
    }
}
// The provider adapter must define retry/idempotency semantics.

interface FeePolicy {
    long feeInCents(long minutes);
}
final class HourlyFee implements FeePolicy {
    private final long centsPerHour;
    HourlyFee(long centsPerHour) {
        if (centsPerHour < 0) throw new IllegalArgumentException();
        this.centsPerHour = centsPerHour;
    }
    public long feeInCents(long minutes) {
        if (minutes < 0) throw new IllegalArgumentException();
        long hours = minutes / 60 + (minutes % 60 == 0 ? 0 : 1);
        return Math.multiplyExact(hours, centsPerHour);
    }
}

interface Notifier { void send(String recipient, String text); }

final class CountingNotifier implements Notifier {
    private final Notifier delegate;
    private final java.util.concurrent.atomic.AtomicLong attempts =
        new java.util.concurrent.atomic.AtomicLong();
    CountingNotifier(Notifier delegate) {
        this.delegate = java.util.Objects.requireNonNull(delegate);
    }
    public void send(String recipient, String text) {
        attempts.incrementAndGet();
        delegate.send(recipient, text);
    }
    long attempts() { return attempts.get(); }
}

enum BookingState { HELD, CONFIRMED, EXPIRED, CANCELLED }

final class Booking {
    private BookingState state = BookingState.HELD;
    synchronized void confirm() {
        if (state == BookingState.CONFIRMED) return;
        if (state != BookingState.HELD)
            throw new IllegalStateException("cannot confirm " + state);
        state = BookingState.CONFIRMED;
    }
    synchronized BookingState state() { return state; }
}
// Expiry checks, payment coordination, and cross-process storage
// belong in the full use case; this is a local transition example.

final class Seats {
    private final java.util.concurrent.ConcurrentHashMap<String,String> owners =
        new java.util.concurrent.ConcurrentHashMap<>();
    boolean reserve(String seatId, String bookingId) {
        String previous = owners.putIfAbsent(seatId, bookingId);
        return previous == null || previous.equals(bookingId);
    }
    boolean release(String seatId, String bookingId) {
        return owners.remove(seatId, bookingId);
    }
}
// Atomic per seat in this JVM; not durable or multi-server storage.

final class LruCache<K,V> {
    private final int capacity;
    private final java.util.LinkedHashMap<K,V> map =
        new java.util.LinkedHashMap<>(16, 0.75f, true);
    LruCache(int capacity) {
        if (capacity < 0) throw new IllegalArgumentException();
        this.capacity = capacity;
    }
    synchronized V get(K key) { return map.get(key); }
    synchronized void put(K key, V value) {
        java.util.Objects.requireNonNull(key);
        java.util.Objects.requireNonNull(value);
        map.put(key, value);
        if (map.size() > capacity) {
            var oldest = map.keySet().iterator();
            oldest.next(); oldest.remove();
        }
    }
}
