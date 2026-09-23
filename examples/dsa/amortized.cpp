#include <stdexcept>
#include <vector>
class TwoStackQueue {
    std::vector<int> in,out;
public:
    void push(int x) { in.push_back(x); }
    int pop() {
        if(out.empty()) while(!in.empty()) {
            out.push_back(in.back()); in.pop_back();
        }
        if(out.empty()) throw std::out_of_range("empty queue");
        int x=out.back(); out.pop_back(); return x;
    }
};
