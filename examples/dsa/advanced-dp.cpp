#include <algorithm>
#include <vector>
int lisLength(const std::vector<int>& values) {
    std::vector<int> tails;
    for(int x: values) {
        auto it=std::lower_bound(tails.begin(),tails.end(),x);
        if(it==tails.end()) tails.push_back(x);
        else *it=x;
    }
    return static_cast<int>(tails.size());
} // Input length must fit int. Strictly increasing, not nondecreasing.
