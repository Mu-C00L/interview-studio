#include <iostream>
#include <vector>
long long sumScores(const std::vector<int>& scores) {
    long long total = 0;
    for (int score : scores) total += score;
    return total;
}
#ifndef STUDY_TEST
int main() {
    std::cout << sumScores({7,4,9}) << '\n';
}
#endif
