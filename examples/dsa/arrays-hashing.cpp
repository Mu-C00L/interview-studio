#include <unordered_map>
#include <vector>
long long countSumK(const std::vector<int>& nums, long long k) {
    std::unordered_map<long long, long long> frequency{{0, 1}};
    long long total = 0, answer = 0;
    for (int value : nums) {
        total += value;
        auto it = frequency.find(total - k);
        if (it != frequency.end()) answer += it->second;
        ++frequency[total];
    }
    return answer;
} // Assume prefix totals, total-k, and result fit long long.
