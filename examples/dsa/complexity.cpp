#include <algorithm>
#include <stdexcept>
#include <vector>
int maximum(const std::vector<int>& values) {
    if (values.empty()) throw std::invalid_argument("empty input");
    int best = values.front();
    for (int value : values) best = std::max(best, value);
    return best;
}
