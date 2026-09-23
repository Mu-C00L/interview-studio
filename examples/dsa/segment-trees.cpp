#include <stdexcept>
#include <vector>
class SumTree {
    std::size_t n;std::vector<long long> t;
public:
    explicit SumTree(const std::vector<int>& a):n(a.size()),t(2*n){
        for(std::size_t i=0;i<n;++i)t[n+i]=a[i];
        for(std::size_t i=n;i>1;){--i;t[i]=t[2*i]+t[2*i+1];}
    }
    void set(std::size_t i,long long x){
        if(i>=n)throw std::out_of_range("index");
        t[i+=n]=x;while(i>1){i/=2;t[i]=t[2*i]+t[2*i+1];}
    }
    long long sum(std::size_t l,std::size_t r)const{
        if(l>r||r>n)throw std::out_of_range("range");
        long long answer=0;
        for(l+=n,r+=n;l<r;l/=2,r/=2){
            if(l&1)answer+=t[l++];
            if(r&1)answer+=t[--r];
        }
        return answer;
    }
}; // Sizes must permit allocation; all arithmetic sums must fit long long.
