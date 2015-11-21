#Задача: fibonacci

#Return the nth item in the Fibonacci sequence. Hint: The first item in the sequence is 0.

#Example: 13 == solution(7)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/fibonacci.clj

# BEGIN implement function `solution` here 
def solution(n)
  fib(0,1,n,0)
end

def fib (p,c,n,m)
  return c if m == n-1
  fib(c,c+p,n,m+1)
end
# END