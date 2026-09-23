struct Node {
    int value;
    Node* next = nullptr;
};
Node* reverseList(Node* head) {
    Node* previous = nullptr;
    Node* current = head;
    while (current != nullptr) {
        Node* following = current->next;
        current->next = previous;
        previous = current;
        current = following;
    }
    return previous;
} // Borrows existing nodes; it does not allocate or delete them.
