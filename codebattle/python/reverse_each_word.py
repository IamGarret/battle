#Задача: reverse_each_word

#Given a string as input, reverse each word, but keep the word order the same. Words are separated by whitespaces.

#Example: "olleH ,ereht dna woh era ?uoy" == solution("Hello there, and how are you?")

def solution(s):
  return ' '.join(i[::-1] for i in s.split())