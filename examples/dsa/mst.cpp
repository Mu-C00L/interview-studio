#include <algorithm>
#include <numeric>
#include <optional>
#include <tuple>
#include <vector>
std::optional<long long> mstCost(int n,std::vector<std::tuple<int,int,int>> edges) {
    if(n==0) return 0;
    std::vector<int> p(n),size(n,1); std::iota(p.begin(),p.end(),0);
    auto find=[&](int x){while(x!=p[x]){p[x]=p[p[x]];x=p[x];}return x;};
    std::sort(edges.begin(),edges.end()); // tuples are (weight,u,v)
    long long total=0;int used=0;
    for(auto [w,u,v]:edges){u=find(u);v=find(v);if(u==v)continue;
        if(size[u]<size[v])std::swap(u,v);
        p[v]=u;size[u]+=size[v];total+=w;++used;}
    if(used!=n-1)return std::nullopt;
    return total;
} // Require n>=0, valid vertex IDs, and representable total cost.
