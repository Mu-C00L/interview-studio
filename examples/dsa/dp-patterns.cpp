#include <algorithm>
#include <stdexcept>
#include <vector>
long long knapsack(const std::vector<int>& weights,
                   const std::vector<int>& values, int capacity) {
    if (weights.size() != values.size() || capacity < 0)
        throw std::invalid_argument("invalid input");
    std::vector<long long> dp(static_cast<std::size_t>(capacity) + 1, 0);
    for (std::size_t i = 0; i < weights.size(); ++i) {
        if (weights[i] <= 0) throw std::invalid_argument("positive weights required");
        for (int room = capacity; room >= weights[i]; --room)
            dp[room] = std::max(dp[room], dp[room - weights[i]] + values[i]);
    }
    return dp[capacity];
} // Assumes achievable total values fit long long.
