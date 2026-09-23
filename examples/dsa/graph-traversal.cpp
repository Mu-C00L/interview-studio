#include <queue>
#include <vector>
std::vector<int> distances(const std::vector<std::vector<int>>& graph,
                           int source) {
    std::vector<int> distance(graph.size(), -1);
    std::queue<int> queue;
    distance.at(source) = 0;
    queue.push(source);
    while (!queue.empty()) {
        int u = queue.front(); queue.pop();
        for (int v : graph[u]) {
            if (distance[v] == -1) {
                distance[v] = distance[u] + 1;
                queue.push(v);
            }
        }
    }
    return distance;
} // All vertex IDs must be valid indices; -1 means unreachable.
