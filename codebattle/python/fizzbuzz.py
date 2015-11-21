#Задача: fizzbuzz

#If a number is divisible by 3, return "Fizz". If a number is divisible by 5, return "Buzz". If a number is divisible by 3 and 5, return "FizzBuzz"

#Example: "Fizz" == solution(3)

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/fizzbuzz.clj

# BEGIN implement function `solution` here 
def solution(x):
  if x % 15 == 0:
    return 'FizzBuzz'
  if x % 3 == 0:
    return 'Fizz'
  if x % 5 == 0:
    return 'Buzz'
  return ''
# END