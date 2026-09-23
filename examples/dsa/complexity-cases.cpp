#include <vector>
int linearFind(const std::vector<int>& a,int target) {
    for(std::size_t i=0;i<a.size();++i)
        if(a[i]==target) return static_cast<int>(i);
    return -1;
} // Input length must fit int; returns first matching index.
