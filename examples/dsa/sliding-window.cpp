#include <algorithm>
#include <array>
#include <string>
int longestUnique(const std::string& text) {
    std::array<int, 256> last;
    last.fill(-1);
    int left = 0, best = 0;
    for (int right = 0; right < static_cast<int>(text.size()); ++right) {
        unsigned char ch = static_cast<unsigned char>(text[right]);
        left = std::max(left, last[ch] + 1);
        last[ch] = right;
        best = std::max(best, right - left + 1);
    }
    return best;
} // Byte-oriented input; length must fit int.
