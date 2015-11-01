#Задача: concat_chess

#Concatenate 2 strings by characters, one by one. In other words, take the 1st char from the first string, then 1st char from the second string, then 2nd char from the first string, then 2nd char from the second string, and so on. If on string ends before the other, just continue with the remaining characters.

#Example: "awbxcydz" == solution("abcd", "wxyz")

#https://github.com/h/b/blob/master/src/b/issues/concat_chess.clj

# BEGIN implement function `solution` here 
def solution(a,b)
  if a.size >= b.size
    a.chars.zip(b.chars)
  else
    b.chars.zip(a.chars).map(&:reverse)
  end.flatten.compact.join
end
# END