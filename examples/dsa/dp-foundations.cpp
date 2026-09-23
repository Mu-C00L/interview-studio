#include <algorithm>
#include <limits>
#include <stdexcept>
#include <vector>
int minCoins(const std::vector<int>& coins, int amount) {
    if (amount < 0 || amount == std::numeric_limits<int>::max())
        throw std::invalid_argument("unsupported amount");
    for (int coin : coins)
        if (coin <= 0) throw std::invalid_argument("positive coins required");
    int INF = amount + 1;
    std::vector<int> dp(static_cast<std::size_t>(amount) + 1, INF);
    dp[0] = 0;
    for (int value = 1; value <= amount; ++value)
        for (int coin : coins)
            if (coin <= value && dp[value - coin] != INF)
                dp[value] = std::min(dp[value], dp[value - coin] + 1);
    return dp[amount] == INF ? -1 : dp[amount];
}
