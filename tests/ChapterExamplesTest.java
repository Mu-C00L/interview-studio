import java.time.*;
public final class ChapterExamplesTest {
    static void rejects(Class<? extends Throwable> type, Runnable action) {
        try { action.run(); } catch (Throwable ex) {
            if (type.isInstance(ex)) return;
            throw new AssertionError("Wrong exception", ex);
        }
        throw new AssertionError("Expected " + type.getSimpleName());
    }
    public static void main(String[] args) {
        Wallet wallet = new Wallet();
        wallet.credit(100); wallet.spend(40); assert wallet.balance()==60;
        rejects(IllegalStateException.class, () -> wallet.spend(61));
        rejects(IllegalArgumentException.class, () -> wallet.credit(0));
        rejects(ArithmeticException.class, () -> wallet.credit(Long.MAX_VALUE));
        assert wallet.balance()==60;
        assert new CheckoutQuote(new PercentageDiscount(25)).quote(101)==75;
        assert new PercentageDiscount(0).price(Long.MAX_VALUE)==Long.MAX_VALUE;
        assert new PercentageDiscount(100).price(900)==0;
        rejects(IllegalArgumentException.class, () -> new PercentageDiscount(101));
        PurchaseOrder order = new PurchaseOrder(); order.add(new OrderLine("A",2,150));
        var snapshot=order.lines(); order.add(new OrderLine("B",1,200));
        assert snapshot.size()==1 && order.total()==500;
        rejects(UnsupportedOperationException.class, () -> snapshot.clear());
        rejects(ArithmeticException.class, () -> new OrderLine("A",2,Long.MAX_VALUE).subtotal());
        Instant now=Instant.parse("2026-01-01T00:00:00Z");
        assert new LendingPolicy(Clock.fixed(now,ZoneOffset.UTC)).dueAt().equals(now.plus(Duration.ofDays(14)));
        MemoryFiles files=new MemoryFiles();files.mkdir("/notes/java");
        files.write("/notes/java/intro","hello");assert files.read("/notes/java/intro").equals("hello");
        files.write("//notes/java/intro","updated");assert files.read("/notes/java/intro").equals("updated");
        rejects(IllegalStateException.class, () -> files.mkdir("/notes/java/intro/child"));
        rejects(IllegalStateException.class, () -> files.write("/notes/java","bad"));
        rejects(IllegalArgumentException.class, () -> files.read("/notes/../intro"));
        rejects(IllegalStateException.class, () -> files.write("/missing/file","bad"));
        ThreeInRow game=new ThreeInRow();
        rejects(IllegalStateException.class, () -> game.move('O',0,0));
        game.move('X',0,0);rejects(IllegalStateException.class, () -> game.move('O',0,0));
        assert game.turn()=='O'; game.move('O',1,0);game.move('X',0,1);game.move('O',1,1);game.move('X',0,2);
        assert game.outcome()==ThreeInRow.Outcome.X_WINS;
        rejects(IllegalStateException.class, () -> game.move('O',2,2));
        ThreeInRow draw=new ThreeInRow();int[][] moves={{0,0},{0,1},{0,2},{1,1},{1,0},{1,2},{2,1},{2,0},{2,2}};
        for(int i=0;i<moves.length;i++)draw.move(i%2==0?'X':'O',moves[i][0],moves[i][1]);
        assert draw.outcome()==ThreeInRow.Outcome.DRAW;
        System.out.println("PASS: six new Java chapters: contracts, overflow, immutability, clock, file operations, and game transitions.");
    }
}
