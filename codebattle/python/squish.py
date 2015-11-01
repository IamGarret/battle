#Задача: squish

#Write function, which replace any sequences of spaces to single space.

#Example: "This string has too much spaces" == solution("This string has too much spaces")

#https://github.com/h/b/blob/master/src/b/issues/squish.clj

# BEGIN implement function `solution` here 
def solution(s):
  return ' '.join(s.split())
# END
