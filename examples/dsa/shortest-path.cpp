#include <functional>
#include <limits>
#include <queue>
#include <stdexcept>
#include <utility>
#include <vector>
using Edge = std::pair<int, int>; // destination, nonnegative weight
std::vector<long long> dijkstra(const std::vector<std::vector<Edge>>& graph,
                                int source) {
    const long long INF = std::numeric_limits<long long>::max();
    std::vector<long long> distance(graph.size(), INF);
    using Entry = std::pair<long long, int>;
    std::priority_queue<Entry, std::vector<Entry>, std::greater<Entry>> heap;
    distance.at(source) = 0; heap.push({0, source});
    while (!heap.empty()) {
        auto [cost, u] = heap.top(); heap.pop();
        if (cost != distance[u]) continue;
        for (auto [v, weight] : graph[u]) {
            if (weight < 0) throw std::invalid_argument("negative edge");
            if (cost > INF - weight) throw std::overflow_error("distance");
            long long candidate = cost + weight;
            if (candidate < distance[v]) {
                distance[v] = candidate;
                heap.push({candidate, v});
            }
        }
    }
    return distance;
} // Valid vertex IDs; representable finite distances must be < INF.
