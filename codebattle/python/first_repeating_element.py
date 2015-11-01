#Задача: first_repeating_element

#Given an array of integers, find the first repeating element in it. Find the element that occurs more than once and whose index of first occurrence is smallest.

#Example: 5 == solution([10,5,3,4,3,5,6])

#https://github.com/h/b/blob/master/src/b/issues/first_repeating_element.clj

# BEGIN implement function `solution` here 
def solution(a):
  for i,x in enumerate(a):
    for y in a[i+1:]:
      if y ==x:
        return y
# END