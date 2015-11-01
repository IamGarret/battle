#Задача: missing_number_in_progression

#Given an array that represents elements of an arithmetic progression in order. One element is missing in the progression. Return the missing number.

#Example: 6 == solution([2,4,8,10,12,14])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/missing_number_in_progression.clj

def solution(n):
  return  (len(n) + 1) * (n[0] + n[-1]) // 2 - sum(n)