#include <deque>
#include <stdexcept>
#include <vector>
std::vector<int> windowMax(const std::vector<int>& a,int k) {
    if(k<=0 || static_cast<std::size_t>(k)>a.size()) throw std::invalid_argument("window");
    std::deque<int> d; std::vector<int> out;
    for(int i=0;i<static_cast<int>(a.size());++i) {
        while(!d.empty() && d.front()<=i-k) d.pop_front();
        while(!d.empty() && a[d.back()]<=a[i]) d.pop_back();
        d.push_back(i);
        if(i>=k-1) out.push_back(a[d.front()]);
    }
    return out;
} // Input length must fit int.
