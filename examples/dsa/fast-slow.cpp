struct CycleNode { int value; CycleNode* next=nullptr; };
CycleNode* cycleEntry(CycleNode* head) {
    CycleNode *slow=head,*fast=head;
    do {
        if(!fast || !fast->next) return nullptr;
        slow=slow->next; fast=fast->next->next;
    } while(slow!=fast);
    slow=head;
    while(slow!=fast) { slow=slow->next; fast=fast->next; }
    return slow;
}
