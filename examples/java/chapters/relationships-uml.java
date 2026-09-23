record OrderLine(String sku,int quantity,long unitPriceMinor) {
    OrderLine {
        if(sku==null||sku.isBlank()||quantity<=0||unitPriceMinor<0)
            throw new IllegalArgumentException("line");
    }
    long subtotal() { return Math.multiplyExact(quantity,unitPriceMinor); }
}
final class PurchaseOrder {
    private final java.util.List<OrderLine> lines=new java.util.ArrayList<>();
    void add(OrderLine line) { lines.add(java.util.Objects.requireNonNull(line)); }
    java.util.List<OrderLine> lines() { return java.util.List.copyOf(lines); }
    long total() {
        long sum=0;for(OrderLine line:lines)sum=Math.addExact(sum,line.subtotal());return sum;
    }
} // Single-threaded; no persisted customer/order lifecycle is implemented here.
