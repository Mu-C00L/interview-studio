#include <algorithm>
#include <numeric>
#include <string>
#include <vector>
int editDistance(const std::string& a,const std::string& b) {
    std::vector<int> prev(b.size()+1),cur(b.size()+1);
    std::iota(prev.begin(),prev.end(),0);
    for(int i=1;i<=static_cast<int>(a.size());++i){
        cur[0]=i;
        for(int j=1;j<=static_cast<int>(b.size());++j)
            cur[j]=a[i-1]==b[j-1]?prev[j-1]:1+std::min({prev[j],cur[j-1],prev[j-1]});
        prev.swap(cur);
    }
    return prev[b.size()];
} // Byte strings; lengths and distances must fit int.
