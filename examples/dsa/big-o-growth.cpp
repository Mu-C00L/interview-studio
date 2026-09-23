#include <vector>
long long equalPairsSlow(const std::vector<int>& a) {
    long long answer=0;
    for(std::size_t i=0;i<a.size();++i)
        for(std::size_t j=i+1;j<a.size();++j)
            if(a[i]==a[j]) ++answer;
    return answer;
} // Require the number of pairs to fit long long.
