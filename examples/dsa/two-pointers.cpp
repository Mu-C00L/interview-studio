#include <algorithm>
#include <stdexcept>
#include <utility>
#include <vector>
using Interval = std::pair<int, int>;
std::vector<Interval> mergeIntervals(std::vector<Interval> intervals) {
    std::sort(intervals.begin(), intervals.end());
    std::vector<Interval> merged;
    for (auto [start, end] : intervals) {
        if (start > end) throw std::invalid_argument("invalid interval");
        if (!merged.empty() && start <= merged.back().second)
            merged.back().second = std::max(merged.back().second, end);
        else merged.emplace_back(start, end);
    }
    return merged;
}
