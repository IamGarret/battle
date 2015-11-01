#Задача: next_lucky_number

#Lucky numbers are defined as the numbers consisting only of digits 3 and 5. Write a function which, given a number N, returns the smallest lucky number strictly greater than N.

#Example: 5 == solution(4)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/next_lucky_number.clj

# BEGIN implement function `solution` here 
from itertools import *
def solution(x):
  return next(y for y in count(x + 1) if set(str(y)) <= set('35'))
# END