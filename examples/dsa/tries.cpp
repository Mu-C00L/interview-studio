#include <memory>
#include <string>
#include <unordered_map>
class Trie {
    std::unordered_map<char, std::unique_ptr<Trie>> children;
    bool terminal = false;
public:
    void insert(const std::string& word) {
        Trie* node = this;
        for (char ch : word) {
            auto& child = node->children[ch];
            if (!child) child = std::make_unique<Trie>();
            node = child.get();
        }
        node->terminal = true;
    }
    bool contains(const std::string& word) const {
        const Trie* node = this;
        for (char ch : word) {
            auto it = node->children.find(ch);
            if (it == node->children.end()) return false;
            node = it->second.get();
        }
        return node->terminal;
    }
}; // Byte-oriented strings; unique_ptr owns child nodes.
