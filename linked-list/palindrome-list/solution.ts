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

function isPalindrome(head: ListNode | null): boolean {
    function middleNode(head: ListNode | null): ListNode | null {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    function reverseList(head: ListNode | null): ListNode | null {
        let prev = null;
        let curr = head;

        while (curr !== null){
            let tmp = curr;
            curr = curr.next;
            tmp.next = prev;
            prev = tmp
        }

        return prev;
    };

    const first_half_end_node = middleNode(head);
    const second_half_begin_node = reverseList(first_half_end_node);

    let p1 = head;
    let p2 = second_half_begin_node;

    while (p2 && p1) {
        if (p1.val !== p2.val) return false;
      p1 = p1.next;
      p2 = p2.next;  
    }

    return true;
};