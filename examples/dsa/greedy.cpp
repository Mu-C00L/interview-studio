#include <algorithm>
#include <limits>
#include <utility>
#include <vector>
std::vector<std::pair<int,int>> maxNonoverlapping(
    std::vector<std::pair<int,int>> intervals) {
    std::sort(intervals.begin(), intervals.end(),
        [](const auto& a, const auto& b) { return a.second < b.second; });
    std::vector<std::pair<int,int>> selected;
    long long end = std::numeric_limits<long long>::lowest();
    for (auto [start, finish] : intervals) {
        if (start >= end) { selected.push_back({start, finish}); end = finish; }
    }
    return selected;
} // Require valid nonempty half-open intervals: start < finish.
