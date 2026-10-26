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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (true) {
        let minIndex = -1;

        // Ищем минимальный элемент среди голов списков
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) continue;

            if (
                minIndex === -1 ||
                lists[i]!.val < lists[minIndex]!.val
            ) {
                minIndex = i;
            }
        }

        // Все списки закончились
        if (minIndex === -1) break;

        // Добавляем минимальный узел
        const minNode = lists[minIndex]!;
        lists[minIndex] = minNode.next;

        current.next = minNode;
        current = current.next;
    }

    return dummy.next;
}