#include <vector>
std::vector<int> warmerDays(const std::vector<int>& temperatures) {
    std::vector<int> answer(temperatures.size(), 0), stack;
    for (int i = 0; i < static_cast<int>(temperatures.size()); ++i) {
        while (!stack.empty() && temperatures[stack.back()] < temperatures[i]) {
            int j = stack.back(); stack.pop_back();
            answer[j] = i - j;
        }
        stack.push_back(i);
    }
    return answer;
} // Input length must fit int.
