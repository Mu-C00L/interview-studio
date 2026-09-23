#include <limits>
struct TreeNode {
    int value;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;
};
bool validWithin(const TreeNode* node, long long low, long long high) {
    if (!node) return true;
    if (node->value <= low || node->value >= high) return false;
    return validWithin(node->left, low, node->value) &&
           validWithin(node->right, node->value, high);
}
bool validBst(const TreeNode* root) {
    return validWithin(root, std::numeric_limits<long long>::lowest(),
                       std::numeric_limits<long long>::max());
} // Node values are int, so wider bounds include INT_MIN/INT_MAX.
