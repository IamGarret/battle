#Задача: concat_chess

#Concatenate 2 strings by characters, one by one. In other words, take the 1st char from the first string, then 1st char from the second string, then 2nd char from the first string, then 2nd char from the second string, and so on. If on string ends before the other, just continue with the remaining characters.

#Example: "awbxcydz" == solution("abcd", "wxyz")

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/concat_chess.clj

# BEGIN implement function `solution` here 
def solution(s1, s2):
  res = []
  for i in range(max(len(s1), len(s2))):
    if i < len(s1):
      res.append(s1[i])
    if i < len(s2):
      res.append(s2[i])
  return ''.join(res)
# END