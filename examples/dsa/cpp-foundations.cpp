#include <cstdint>
std::uint64_t gcdRecursive(std::uint64_t a, std::uint64_t b) {
    return b == 0 ? a : gcdRecursive(b, a % b);
}
// Convention: gcd(0,0) returns 0 here.
// For standard-library use: std::gcd from <numeric> in C++17.
