#Задача: string_made_of

#You are given a string, which contains entirely of decimal digits (0-9). Each digit is made of a certain number of dashes, as on LCD-display of calculator. For instance 1 is made of 2 dashes, 8 is made of 7 dashes and so on. You have to write a function that takes this string message and returns the count of dashes in the string message.

#Example: 18 == solution("12134")

#https://github.com/h/b/blob/master/src/b/issues/string_made_of.clj

# BEGIN implement function `solution` here 
def solution(s)
  dashes = {
    0 => 6,
    1 => 2,
    2 => 5,
    3 => 5,
    4 => 4,
    5 => 5,
    6 => 6,
    7 => 3,
    8 => 7,
    9 => 6
  }
  s.chas.einject(0){ |s, d| s += dashes[d.to_i] }
end
# END