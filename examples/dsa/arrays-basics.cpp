#include <algorithm>
#include <vector>
void reverseValues(std::vector<int>& a) {
    std::size_t left=0, right=a.size();
    while (left<right) {
        --right;
        if (left>=right) break;
        std::swap(a[left],a[right]);
        ++left;
    }
}
