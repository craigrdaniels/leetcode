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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l3 = new ListNode();
  let carry: number = 0;
  while (l1.next || l2.next) {
    l3 = ((l1.val + l2.val) % 10) + carry;
    carry = l1.val + l2.val - ((l1.val + l2.val) % 10);
    l1 = l1.next;
    l2 = l2.next;
  }
}
