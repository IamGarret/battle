#Задача: count_pair_with_difference_equal_to_k

#Given an integer array and a positive integer k, count all distinct pairs with difference equal to k.

#Example: 2 == solution([1,5,3,4,2], 3)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/count_pair_with_difference_equal_to_k.clj

# BEGIN implement function `solution` here 
def solution(arr, n):
  if len(arr) < 1:
    return 0
  res = 0
  t = []
  for i in range(len(arr)-1):
    for j in range(i+1, len(arr)):
      if abs(arr[i]-arr[j]) == n:
        t.append((arr[i], arr[j]))
  d = set(t)      
  return len(d)

# END