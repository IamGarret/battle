#Задача: word_positions

#Given a text file and a word, find the positions that the word occurs in the file. We’ll be asked to find the positions of many words in the same file.

#Example: [12] == solution("find a word in some sentence", "in")

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/word_positions.clj

# BEGIN implement function `solution` here 
import re
def solution(h, n):
  n = r'\b{}\b'.format(re.escape(n))
  return [m.start() for m in re.finditer(n, h)]
# END

# alternative:
# def solution(s, w):
  # res = []
  # i = s.find(s)
  # print(s,w,i)
  # while i != -1:
    # print(s,w,i)
    # res.append(i)
    # i = s.find(w,i+1)
  # if not s.startswith(w):
  	# return res[1:]
  # else:
    # return res
