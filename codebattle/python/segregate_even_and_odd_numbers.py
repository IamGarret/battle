#������: segregate_even_and_odd_numbers

#Given an array of numbers, return an array in which all the even numbers come first, and all the odd numbers come second.

#Example: [12,34,8,90,45,9,3] == solution([12,34,45,9,8,90,3])

#https://github.com/h/b/blob/master/src/b/issues/segregate_even_and_odd_numbers.clj

# BEGIN implement function `solution` here 
f solution()xs:
  return sorted(xs, key=lambda x: x % 2)
# END