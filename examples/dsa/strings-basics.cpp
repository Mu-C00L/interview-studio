#include <array>
#include <string>
bool byteAnagram(const std::string& a,const std::string& b) {
    if(a.size()!=b.size()) return false;
    std::array<long long,256> count{};
    for(unsigned char c:a) ++count[c];
    for(unsigned char c:b) --count[c];
    for(long long n:count) if(n!=0) return false;
    return true;
}
