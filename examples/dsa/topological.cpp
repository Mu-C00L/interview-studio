#include <optional>
#include <queue>
#include <utility>
#include <vector>
std::optional<std::vector<int>> topoOrder(
    int n, const std::vector<std::pair<int,int>>& edges) {
    std::vector<std::vector<int>> graph(n);
    std::vector<int> indegree(n), order;
    for (auto [u,v] : edges) { graph[u].push_back(v); ++indegree[v]; }
    std::queue<int> ready;
    for (int i = 0; i < n; ++i) if (indegree[i] == 0) ready.push(i);
    while (!ready.empty()) {
        int u = ready.front(); ready.pop(); order.push_back(u);
        for (int v : graph[u]) if (--indegree[v] == 0) ready.push(v);
    }
    if (static_cast<int>(order.size()) != n) return std::nullopt;
    return order;
} // Require n >= 0 and vertex IDs in [0,n).
