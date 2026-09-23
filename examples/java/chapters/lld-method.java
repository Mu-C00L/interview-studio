interface LoanRepository {
    // Atomically claims an available copy and records its active loan.
    // Returns a conflict if another active loan already owns the copy.
    String borrow(String copyId,String memberId,java.time.Instant dueAt);
    // Return behavior for repeated requests must be documented by the implementation.
    void returnLoan(String loanId);
}
final class LendingPolicy {
    private final java.time.Clock clock;
    LendingPolicy(java.time.Clock clock) { this.clock=java.util.Objects.requireNonNull(clock); }
    java.time.Instant dueAt() { return clock.instant().plus(java.time.Duration.ofDays(14)); }
}
// Repository is a contract, not a claim that this snippet implements atomic storage.
