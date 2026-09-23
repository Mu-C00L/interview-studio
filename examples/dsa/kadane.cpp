#include <algorithm>
#include <stdexcept>
#include <vector>
long long maxSubarray(const std::vector<int>& a) {
    if(a.empty()) throw std::invalid_argument("nonempty input required");
    long long ending=a[0],best=a[0];
    for(std::size_t i=1;i<a.size();++i) {
        ending=std::max(static_cast<long long>(a[i]),ending+a[i]);
        best=std::max(best,ending);
    }
    return best;
} // Require every accumulated candidate sum to fit long long.
