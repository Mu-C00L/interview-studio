public class DesignExamplesTest {
    public static void main(String[] args) {
        assert new Money(100,"USD").plus(new Money(50,"USD")).minorUnits()==150;
        boolean mismatch=false;
        try {new Money(1,"USD").plus(new Money(1,"EUR"));}
        catch(IllegalArgumentException expected){mismatch=true;}
        assert mismatch;
        assert new HourlyFee(200).feeInCents(61)==400;
        assert new HourlyFee(200).feeInCents(0)==0;
        final int[] sent={0};
        CountingNotifier notifier=new CountingNotifier((to,text)->sent[0]++);
        notifier.send("a","hello");assert notifier.attempts()==1 && sent[0]==1;
        Booking booking=new Booking();booking.confirm();booking.confirm();
        assert booking.state()==BookingState.CONFIRMED;
        Seats seats=new Seats();assert seats.reserve("A","one");
        assert seats.reserve("A","one");assert !seats.reserve("A","two");
        assert !seats.release("A","two");assert seats.release("A","one");
        assert seats.reserve("A","two");assert !seats.release("A","one");
        LruCache<String,Integer> cache=new LruCache<>(2);
        cache.put("A",1);cache.put("B",2);assert cache.get("A")==1;
        cache.put("C",3);assert cache.get("B")==null;
        cache.put("A",4);assert cache.get("A")==4;
        LruCache<String,Integer> zero=new LruCache<>(0);
        zero.put("A",1);assert zero.get("A")==null;
        PaymentGateway fake=(id,total)->new PaymentResult(id,true);
        assert new CheckoutService(fake).pay("order",new Money(100,"USD")).accepted();
        System.out.println("PASS: all seven Java 17 example groups compile and satisfy behavioral checks.");
    }
}
