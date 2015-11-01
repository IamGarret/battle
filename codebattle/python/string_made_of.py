#Задача: string_made_of

#You are given a string, which contains entirely of decimal digits (0-9). Each digit is made of a certain number of dashes, as on LCD-display of calculator. For instance 1 is made of 2 dashes, 8 is made of 7 dashes and so on. You have to write a function that takes this string message and returns the count of dashes in the string message.

#Example: 18 == solution("12134")

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/string_made_of.clj

# BEGIN implement function `solution` here 
def solution(x):
  ds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]
  return sum(ds[int(d)] for d in str(x))
# END