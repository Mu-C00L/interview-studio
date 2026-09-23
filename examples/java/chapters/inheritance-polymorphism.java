interface PricingRule { long price(long baseMinor); }
final class PercentageDiscount implements PricingRule {
    private final int percent;
    PercentageDiscount(int percent) {
        if(percent<0||percent>100) throw new IllegalArgumentException("percent");
        this.percent=percent;
    }
    public long price(long baseMinor) {
        if(baseMinor<0) throw new IllegalArgumentException("base");
        long kept=100-percent;
        return Math.addExact((baseMinor/100)*kept,(baseMinor%100)*kept/100);
    }
}
final class CheckoutQuote {
    private final PricingRule rule;
    CheckoutQuote(PricingRule rule) { this.rule=java.util.Objects.requireNonNull(rule); }
    long quote(long baseMinor) { return rule.price(baseMinor); }
} // Rounds final discounted amount down to the minor unit.
