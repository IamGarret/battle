#Задача: complete_string

#A string is said to be complete if it contains all the characters from a to z. Given a string, check if it's complete or not.

#Example: false == solution("wyyga")

# BEGIN implement function `solution` here 
import string

def solution(n):
  num = "1234567890"
  st = "abcdefghijklmnopqrstuvwxyz"
  n = set(n)
  st = list(st)
  i = 0
  for letter in st:
    if letter in n:
      i+=1
  if i == 26:
    return True
  return False
# END

# BEGIN implement function `solution` here 
def solution str
  str.split(//).uniq.sort == ('a'..'z').to_a
end
# END