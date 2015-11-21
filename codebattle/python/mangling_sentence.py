#Задача: mangling_sentence

#FIXME Напишите функцию сортирующую буквы в каждом слове предложения.

#Example: "Eey fo Entw, adn Eot fo Fgor, Loow fo Abt, adn Egnotu fo Dgo." == solution("Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.")

import re
word = re.compile(r'([A-z]+|[A-Z]+-[a-z]+|[a-z-])')

def formatter(m):
  g0 = m.group(0)
  res = ''.join(sorted(g0.lower()))
  if g0[0].isupper():
    res = res.capitalize()
  return res

def solution(s):
  return word.sub(formatter, s)