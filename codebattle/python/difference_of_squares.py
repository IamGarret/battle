#Задача: difference_of_squares

#Find the difference between the square of the sum and the sum of the squares of the first N natural numbers. The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 10**2 = 385 Hence, the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

#Example: 170 == solution(5)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/difference_of_squares.clj

# BEGIN implement function `solution` here 
def solution(n):
  sum_sq = sum([i * i for i in range(1, n + 1)])
  sq_sum = sum(range(1, n + 1))
  sq_sum *= sq_sum
  
  return sq_sum - sum_sq
# END