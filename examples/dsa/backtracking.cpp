#include <functional>
#include <vector>
std::vector<std::vector<int>> subsets(const std::vector<int>& values) {
    std::vector<std::vector<int>> out;
    std::vector<int> path;
    std::function<void(std::size_t)> visit = [&](std::size_t i) {
        if (i == values.size()) { out.push_back(path); return; }
        visit(i + 1);
        path.push_back(values[i]);
        visit(i + 1);
        path.pop_back();
    };
    visit(0);
    return out;
} // push_back copies the current path into out.
