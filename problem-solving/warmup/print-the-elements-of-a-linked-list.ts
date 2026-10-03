class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
}

function createAlinkedList(values: number[]): SinglyLinkedListNode {
    const head = new SinglyLinkedListNode(values[0]);
    let current = head;

    for (let i = 1; i < values.length; i++) {
        current.next = new SinglyLinkedListNode(values[i]);
        current = current.next;
    }

    return head;
}

function printLinkedList(head: SinglyLinkedListNode) {
    console.log(head.data);

    if (head.next !== null) {
        printLinkedList(head.next);
    }
}

const array = [16, 13];
const values = createAlinkedList(array);

printLinkedList(values);