// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let ctr = 0;
        let node = this.head;
        while (node) {
            ctr++;
            node = node.next;
        }
        return ctr;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
        while (node && node.next) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }
    removeLast() {
        if (this.head) {
            if (this.head.next) {
                let prev = this.head;
                let curr = this.head.next;
                while (curr.next) {
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = null;
            } else {
                this.head = null;
            }
        }
    }
    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            const lastNode = this.getLast();
            lastNode.next = new Node(data);
        }
    }
    getAt(index) {
        if (this.head) {
            let node = this.head;
            let ctr = 0;
            while (node) {
                if (index === ctr) {
                    break;
                }
                node = node.next;
                ctr++;
            }
            return node;
        }
        return null;
    }
    removeAt(index) {
        if (this.head) {
            if (index === 0) {
                this.head = this.head.next;
            } else {
                const prev = this.getAt(index - 1);
                if (prev) {
                    prev.next = prev.next && prev.next.next ? prev.next.next : null;
                }
            }
        }
    }
    insertAt(data, index) {
        if (this.head) {
            if (index === 0) {
                this.head = new Node(data, this.head);
            } else {
                const prev = this.getAt(index - 1);
                if (prev) {
                    prev.next = new Node(data, prev.next);
                } else {
                    this.getLast().next = new Node(data);
                }
            }
        } else {
            this.head = new Node(data);
        }
    }
}


module.exports = {
    Node,
    LinkedList
};