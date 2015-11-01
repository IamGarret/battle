#Задача: largest_pair_sum_in_array

#Given an array of integers, find the largest pair sum in it. For example, the largest pair sum in [12, 34, 10, 6, 40] is 74.

#Example: 11 == solution([1,2,3,4,5,6])

#https://github.com/h/b/blob/master/src/b/issues/largest_pair_sum_in_array.clj

# BEGIN implement function `solution` here 
def solution(a):
  if not a:
    return 0
  m = max(a)
  a.pop(a.index(m))
  l = max(a) if len(a) else 0
  return m + l
# END