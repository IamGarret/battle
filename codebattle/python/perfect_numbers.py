#Задача: perfect_numbers

#Determine if a given number is "perfect". A number is "perfect" if the sum of its divisors is equal to the number itself.

#Example: true == solution(6)

#https://github.com/h/b/blob/master/src/b/issues/perfect_numbers.clj

def solution(e):
  return sum([i for i in range(1,e//2 + 2) if not e % i]) == e 
  
#alternative:

# BEGIN implement function `solution` here 
# def solution(n):
  # result = 0
  # for i in range(1, n - 1):
    # if n % i == 0:
      # result += i
  
  # return result == n
# END