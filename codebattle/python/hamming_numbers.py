#Задача: hamming_numbers

#The sequence of Hamming numbers 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36, … consists of all numbers of the form 2^i·3^j·5^k where i, j and k are non-negative integers. Generate n-th number.

#Example: 36 == solution(20)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/hamming_numbers.clj

# BEGIN implement function `solution` here 
def solution(n):
  x = 0
  while n != 0:
    x += 1
    result = x
    while result % 2 == 0:
      result //= 2
    while result % 3 == 0:
      result //= 3
    while result % 5 == 0:
      result //= 5
      
    if result != 1:
      continue
    else:
      n -= 1
      
  return x
# END