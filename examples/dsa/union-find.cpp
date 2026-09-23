#include <numeric>
#include <utility>
#include <vector>
class DSU {
    std::vector<int> parent, size;
public:
    explicit DSU(int n) : parent(n), size(n, 1) {
        std::iota(parent.begin(), parent.end(), 0);
    }
    int find(int x) {
        while (x != parent[x]) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int a, int b) {
        a = find(a); b = find(b);
        if (a == b) return false;
        if (size[a] < size[b]) std::swap(a,b);
        parent[b] = a; size[a] += size[b];
        return true;
    }
}; // Require nonnegative n and valid vertex IDs.
