#include <string>
#include <vector>
std::vector<int> kmpMatches(const std::string& text, const std::string& pattern) {
    // Byte-oriented strings; lengths must fit int.
    if (pattern.empty()) return {0}; // explicit API convention
    int n = static_cast<int>(text.size()), m = static_cast<int>(pattern.size());
    std::vector<int> pi(m), out;
    for (int i=1, j=0; i<m; ++i) {
        while (j && pattern[i]!=pattern[j]) j=pi[j-1];
        if (pattern[i]==pattern[j]) ++j;
        pi[i]=j;
    }
    for (int i=0, j=0; i<n; ++i) {
        while (j && text[i]!=pattern[j]) j=pi[j-1];
        if (text[i]==pattern[j]) ++j;
        if (j==m) { out.push_back(i-m+1); j=pi[j-1]; }
    }
    return out;
}
