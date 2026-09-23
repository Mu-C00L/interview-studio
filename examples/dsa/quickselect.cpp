#include <algorithm>
#include <stdexcept>
#include <vector>
int selectK(std::vector<int> a,std::size_t k) {
    if(k>=a.size()) throw std::out_of_range("rank");
    std::size_t l=0,r=a.size();
    while(true) {
        int pivot=a[l+(r-l)/2];
        std::size_t lt=l,i=l,gt=r;
        while(i<gt) {
            if(a[i]<pivot) std::swap(a[lt++],a[i++]);
            else if(a[i]>pivot) std::swap(a[i],a[--gt]);
            else ++i;
        }
        if(k<lt) r=lt;
        else if(k>=gt) l=gt;
        else return pivot;
    }
}
