#include <vector>
long long sumRange(const std::vector<int>& a,std::size_t left,std::size_t right) {
    if(left==right) return 0;
    if(right-left==1) return a[left];
    std::size_t mid=left+(right-left)/2;
    return sumRange(a,left,mid)+sumRange(a,mid,right);
} // Require 0<=left<=right<=a.size() and representable sums.
