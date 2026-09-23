#include <algorithm>
#include <functional>
#include <vector>
std::vector<int> sccIds(const std::vector<std::vector<int>>& g) {
    int n=static_cast<int>(g.size());
    std::vector<std::vector<int>> reverse(n);
    for(int u=0;u<n;++u) for(int v:g[u]) reverse[v].push_back(u);
    std::vector<int> seen(n),order,component(n,-1);
    std::function<void(int)> first=[&](int u){
        seen[u]=1; for(int v:g[u]) if(!seen[v]) first(v);
        order.push_back(u);
    };
    for(int u=0;u<n;++u) if(!seen[u]) first(u);
    std::function<void(int,int)> second=[&](int u,int id){
        component[u]=id;
        for(int v:reverse[u]) if(component[v]==-1) second(v,id);
    };
    std::reverse(order.begin(),order.end());
    int id=0; for(int u:order) if(component[u]==-1) second(u,id++);
    return component;
} // Valid vertex IDs, size fits int; recursion depth can be O(V).
