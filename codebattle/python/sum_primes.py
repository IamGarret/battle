#Задача: sum_primes

#Write some code to sum all primes from 2 up to a given number.

#Example: 4227 == solution(200)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/sum_primes.clj

# BEGIN implement function `solution` here
def solution(n):
  res = 0
  for i in range(2,n):
    res += i if len([k for k in range(2,i + 1) if i % k == 0]) < 2 else 0
  return res

# END