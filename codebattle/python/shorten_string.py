#Задача: shorten_string

#Provide the word in the form of an acronym composed of the first letter, the number of letters in the word minus 2 and the last letter of the word.

#Example: "L10n" == solution("Localization")

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/shorten_string.clj

# BEGIN implement function `solution` here 
def solution(s):
  return '{}{}{}'.format(s[0], len(s) - 2, s[-1])
# END