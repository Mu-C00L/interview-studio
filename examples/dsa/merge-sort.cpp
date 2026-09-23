#include <vector>
void mergeSort(std::vector<int>& a) {
    std::vector<int> buffer(a.size());
    auto sort=[&](auto&& self,std::size_t l,std::size_t r)->void {
        if(r-l<2) return;
        std::size_t m=l+(r-l)/2; self(self,l,m); self(self,m,r);
        std::size_t i=l,j=m,k=l;
        while(i<m && j<r) buffer[k++]=(a[i]<=a[j]?a[i++]:a[j++]);
        while(i<m) buffer[k++]=a[i++];
        while(j<r) buffer[k++]=a[j++];
        for(k=l;k<r;++k) a[k]=buffer[k];
    };
    sort(sort,0,a.size());
}
