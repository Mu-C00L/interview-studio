#include <stdexcept>
#include <vector>
long long sumPrefix(const std::vector<int>& a,std::size_t k) {
    if(k>a.size()) throw std::out_of_range("prefix length");
    if(k==0) return 0;
    return sumPrefix(a,k-1)+a[k-1];
} // Intermediate sums must fit long long; use a loop for very deep inputs.
