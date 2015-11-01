#Задача: pair_with_maximum_product

#Given an array with both positive and negative integers, return a pair of integers that, when multiplied, would produce the largest possible number. An element can only be used once, in other words, you cannot use a single number multiplied by itself. Elements of the pair should be arranged in ascending order.

#Example: [-4,-3] == solution([-1,-2,-4,-3,0,3,2,1])

#https://github.com/h/b/blob/master/src/b/issues/pair_with_maximum_product.clj

# BEGIN implement function `solution` here 
def solution(arr)
  arr.sort!
  a = arr[-2] * arr[-1]
  b = arr[0] * arr[1]
  a > b ? arr[-2,2] : arr[0,2]
end
# END


