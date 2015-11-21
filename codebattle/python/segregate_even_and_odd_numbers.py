#Задача: segregate_even_and_odd_numbers

#Given an array of numbers, return an array in which all the even numbers come first, and all the odd numbers come second.

#Example: [12,34,8,90,45,9,3] == solution([12,34,45,9,8,90,3])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/segregate_even_and_odd_numbers.clj

# BEGIN implement function `solution` here 
f solution()xs:
  return sorted(xs, key=lambda x: x % 2)
# END

#alternative:

# BEGIN implement function `solution` here 
#def solution(xs):
#  return sorted(xs, key=int(1).__and__)
# END