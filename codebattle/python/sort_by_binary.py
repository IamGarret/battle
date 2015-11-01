#Задача: sort_by_binary

#Sort array of integer numbers by count of 1's in it's binary representation.

#Example: [1,2,4,3] == solution([1,2,3,4])

#https://github.com/h/b/blob/master/src/b/issues/sort_by_binary.clj

# BEGIN implement function `solution` here 
def solution(xs):
  return sorted(xs, key=lambda x: bin(x % 2**32).count('1'))
# END