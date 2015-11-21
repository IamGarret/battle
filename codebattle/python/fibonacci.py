#Задача: fibonacci

#Return the nth item in the Fibonacci sequence. Hint: The first item in the sequence is 0.

#Example: 13 == solution(7)

#https://github.com/Hexlet/battle_asserts/tree/master/src/battle_asserts/issues/fibonacci.clj

# BEGIN implement function `solution` here 
def solution(i):
  return round(((1+5**0.5)/2)**i / 5**0.5)
# END