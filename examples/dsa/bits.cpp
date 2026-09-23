#include <cstdint>
#include <vector>
int singleAmongPairs(const std::vector<int>& values) {
    int answer = 0;
    for (int value : values) answer ^= value;
    return answer;
}
int countSetBits(std::uint64_t x) {
    int count = 0;
    while (x != 0) { x &= x - 1; ++count; }
    return count;
}
bool isPowerOfTwo(std::uint64_t x) {
    return x > 0 && (x & (x - 1)) == 0;
}
