#������: squish

#Write function, which replace any sequences of spaces to single space.

#Example: "This string has too much spaces" == solution("This string has too much spaces")

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/squish.clj

# BEGIN implement function `solution` here 
def solution(s):
  return ' '.join(s.split())
# END
