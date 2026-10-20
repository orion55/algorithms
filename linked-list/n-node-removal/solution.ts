/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyNode = new ListNode(0, head);
		
    let length = 0;
    let curr = dummyNode;
    while (curr !== null) {
        curr = curr.next;
        length++;
    }
    
    curr = dummyNode;
    for (let i=0; i < length - n - 1; i++)
        curr = curr.next;
    
    curr.next = curr.next.next;    
    
    return dummyNode.next;
};