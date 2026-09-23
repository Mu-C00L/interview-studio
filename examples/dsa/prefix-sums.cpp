#include <stdexcept>
#include <vector>
std::vector<long long> makePrefix(const std::vector<int>& a) {
    std::vector<long long> p(a.size()+1);
    for(std::size_t i=0;i<a.size();++i) p[i+1]=p[i]+a[i];
    return p;
}
long long rangeSum(const std::vector<long long>& p,std::size_t l,std::size_t r) {
    if(p.empty() || l>r || r>=p.size()) throw std::out_of_range("range");
    return p[r]-p[l];
} // All totals and differences must fit long long.
