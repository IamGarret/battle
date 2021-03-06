#Задача: next_greater_element

#Given an array, return the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as -1.

#Example: [5,25,25,-1] == solution([4,5,2,25])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/next_greater_element.clj

# BEGIN implement function `solution` here 
def solution(a):
  res = [-1] * len(a)
  for i, x in enumerate(a):
    for y in a[i+1:]:
      if y > x:
        res[i]=y
        break
  return res
# END