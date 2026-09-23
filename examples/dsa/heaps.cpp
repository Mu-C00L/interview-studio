#include <algorithm>
#include <functional>
#include <queue>
#include <vector>
std::vector<int> topKLargest(const std::vector<int>& values, int k) {
    if (k <= 0) return {};
    std::priority_queue<int, std::vector<int>, std::greater<int>> heap;
    for (int value : values) {
        if (heap.size() < static_cast<std::size_t>(k)) heap.push(value);
        else if (value > heap.top()) { heap.pop(); heap.push(value); }
    }
    std::vector<int> out;
    while (!heap.empty()) { out.push_back(heap.top()); heap.pop(); }
    std::reverse(out.begin(), out.end());
    return out;
}
