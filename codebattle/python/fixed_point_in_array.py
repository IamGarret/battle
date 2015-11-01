#Задача: fixed_point_in_array

#Given an array of n distinct integers sorted in ascending order, return a Fixed Point in the array, if there is a Fixed Point present in array; else return -1. Fixed Point in an array is an index i such that arr[i] is equal to i.

#Example: 3 == solution([-10,-5,0,3,7])

#https://github.com/h/b/blob/master/src/b/issues/fixed_point_in_array.clj

# BEGIN implement function `solution` here 
def solution(xs):
  return next((x for (i, x) in enumerate(xs) if i == x), -1)
# END