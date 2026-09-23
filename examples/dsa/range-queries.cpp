#include <stdexcept>
#include <vector>
class Fenwick {
    std::vector<long long> bit;
public:
    explicit Fenwick(int n) {
        if(n<0) throw std::invalid_argument("negative size");
        bit.assign(static_cast<std::size_t>(n)+1,0);
    }
    void add(int index, long long delta) {
        if(index<0 || static_cast<std::size_t>(index)>=bit.size()-1)
            throw std::out_of_range("index");
        for(std::size_t i=static_cast<std::size_t>(index)+1; i<bit.size(); i+=i&(~i+1))
            bit[i]+=delta;
    }
    long long prefix(int end) const {
        if(end<0 || static_cast<std::size_t>(end)>=bit.size())
            throw std::out_of_range("end");
        long long sum=0;
        for(std::size_t i=end; i>0; i-=i&(~i+1)) sum+=bit[i];
        return sum;
    }
}; // All stored sums and additions must fit long long.
