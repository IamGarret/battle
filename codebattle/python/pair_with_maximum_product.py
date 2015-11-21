#Задача: pair_with_maximum_product

#Given an array with both positive and negative integers, return a pair of integers that, when multiplied, would produce the largest possible number. An element can only be used once, in other words, you cannot use a single number multiplied by itself. Elements of the pair should be arranged in ascending order.

#Example: [-4,-3] == solution([-1,-2,-4,-3,0,3,2,1])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/pair_with_maximum_product.clj

# BEGIN implement function `solution` here 
def solution(xs):
  xs = sorted(xs)
  return max([xs[0], xs[1]], [xs[-2], xs[-1]], key=lambda ab: ab[0] * ab[1])
# END