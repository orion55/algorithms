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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // Пустой список или один узел переставлять не нужно
  if (!head || !head.next) return;

  /**
   * Находит узел, стоящий перед серединой списка.
   * Для 1 -> 2 -> 3 -> 4 -> 5 вернёт узел 2.
   */
  function findPrevMid(node: ListNode): ListNode {
    // prevMid будет последним узлом первой половины
    let prevMid: ListNode = node;

    // fast движется вдвое быстрее, поэтому prevMid остановится перед серединой
    let fast: ListNode | null = node.next;

    while (fast?.next) {
      prevMid = prevMid.next!;
      fast = fast.next.next;
    }

    return prevMid;
  }

  /**
   * Отделяет вторую половину списка от первой.
   * Возвращает голову второй половины.
   */
  function splitAfter(prevMid: ListNode): ListNode | null {
    // Запоминаем начало второй половины
    const second: ListNode | null = prevMid.next;

    // Обрываем первую половину
    prevMid.next = null;

    return second;
  }

  /**
   * Разворачивает односвязный список.
   * Возвращает новую голову развёрнутого списка.
   */
  function reverse(node: ListNode | null): ListNode | null {
    // prev — уже обработанная часть списка
    let prev: ListNode | null = null;

    // current — узел, который обрабатываем сейчас
    let current: ListNode | null = node;

    while (current) {
      // Сохраняем следующий узел, чтобы не потерять остаток списка
      const next: ListNode | null = current.next;

      // Разворачиваем ссылку текущего узла назад
      current.next = prev;

      // Сдвигаем указатели вперёд
      prev = current;
      current = next;
    }

    // prev — голова развёрнутого списка
    return prev;
  }

  /**
   * Чередует узлы двух списков:
   * первый из first, затем первый из second и так далее.
   */
  function mergeAlternately(
    first: ListNode | null,
    second: ListNode | null
  ): void {
    // Вторая половина может быть короче, поэтому ориентируемся на неё
    while (second) {
      // Сохраняем следующие узлы обеих частей
      const firstNext: ListNode | null = first!.next;
      const secondNext: ListNode | null = second.next;

      // Ставим узел из второй части после текущего узла первой части
      first!.next = second;

      // После него возвращаем продолжение первой части
      second.next = firstNext;

      // Переходим к следующим узлам
      first = firstNext;
      second = secondNext;
    }
  }

  // 1. Находим узел перед серединой
  const prevMid: ListNode = findPrevMid(head);

  // 2. Отделяем вторую половину
  const second: ListNode | null = splitAfter(prevMid);

  // 3. Разворачиваем вторую половину
  const reversedSecond: ListNode | null = reverse(second);

  // 4. Чередуем узлы первой и развёрнутой второй половин
  mergeAlternately(head, reversedSecond);
}
