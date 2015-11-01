#Задача: word_pattern

#Given a pattern and a string str, find if str follows the same pattern. Examples pattern = " abba ", str = " dog cat cat dog " should return true.

#Example: true == solution("zzbinqs", "dragonborn dragonborn by his honor in sworm")

#https://github.com/h/b/blob/master/src/b/issues/word_pattern.clj

# BEGIN implement function `solution` here 
def solution(s1,s2):
  ss2 = s2.split()
  if len(s1) != len(ss2):
    return False
  d = []
  for i in range(len(s1)):
    d.append((s1[i],ss2[i]))
  s = set(d)
  tt = [t[0] for t in s]
  return len(s) == len(tt)
  

# END