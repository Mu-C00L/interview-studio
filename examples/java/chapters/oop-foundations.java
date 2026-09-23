final class Wallet {
    private long balance;
    public long balance() { return balance; }
    public void credit(long amount) {
        if(amount<=0) throw new IllegalArgumentException("positive amount required");
        balance=Math.addExact(balance,amount);
    }
    public void spend(long amount) {
        if(amount<=0) throw new IllegalArgumentException("positive amount required");
        if(amount>balance) throw new IllegalStateException("insufficient balance");
        balance-=amount;
    }
} // Single-threaded, one declared currency; not a financial service.
