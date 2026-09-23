#include <stdexcept>
#include <utility>
#include <vector>
std::vector<std::vector<int>> undirectedGraph(int n,const std::vector<std::pair<int,int>>& edges) {
    if(n<0) throw std::invalid_argument("vertex count");
    std::vector<std::vector<int>> g(n);
    for(auto [u,v]:edges) {
        if(u<0||v<0||u>=n||v>=n) throw std::out_of_range("vertex");
        g[u].push_back(v); g[v].push_back(u);
    }
    return g;
} // Parallel edges and self-loops are retained.
