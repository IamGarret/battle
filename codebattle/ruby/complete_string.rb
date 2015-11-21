#Задача: complete_string

#A string is said to be complete if it contains all the characters from a to z. Given a string, check if it's complete or not.

#Example: false == solution("wyyga")

# BEGIN implement function `solution` here 

def solution(str)
  ar = ('a'..'z').to_a.join
  strin = str.downcase.chars.sort.uniq.join.include? ar
end

# END