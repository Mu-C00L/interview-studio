#include <vector>
std::vector<int> mergeSorted(const std::vector<int>& a,
                             const std::vector<int>& b) {
    std::size_t i = 0, j = 0;
    std::vector<int> out;
    out.reserve(a.size() + b.size());
    while (i < a.size() && j < b.size()) {
        if (a[i] <= b[j]) out.push_back(a[i++]);
        else out.push_back(b[j++]);
    }
    while (i < a.size()) out.push_back(a[i++]);
    while (j < b.size()) out.push_back(b[j++]);
    return out;
}
