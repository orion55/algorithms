# Title
Merge k Sorted Lists https://leetcode.com/problems/merge-k-sorted-lists/description/
## Desc
```
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
```

## Solution
Алгоритм (выбор минимума)

1. Создаём фиктивный узел `dummy` и указатель `current`.
2. Проходим по всем `k` спискам и находим минимальный элемент среди их голов.
3. Присоединяем найденный узел к результирующему списку.
4. Сдвигаем указатель списка, из которого взяли минимальный элемент.
5. Повторяем, пока все списки не станут пустыми.
6. Возвращаем `dummy.next`.

## Rating
- Время: O(N * k) — для каждого из `N` узлов просматриваем до `k` списков, чтобы найти минимум.
- Память: O(1) — используем только дополнительные указатели, не создавая новых списков.

Где `N` — общее количество узлов, `k` — количество списков.