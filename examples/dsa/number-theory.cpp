#include <cstdint>
#include <stdexcept>
std::uint64_t modPow(std::uint64_t base, std::uint64_t exponent,
                     std::uint64_t modulus) {
    // Bound ensures reduced-factor products fit uint64_t.
    if(modulus==0 || modulus>1000000000ULL)
        throw std::invalid_argument("modulus must be in [1,1e9]");
    base%=modulus;
    std::uint64_t answer=1%modulus;
    while(exponent) {
        if(exponent&1ULL) answer=(answer*base)%modulus;
        base=(base*base)%modulus;
        exponent>>=1;
    }
    return answer;
}
