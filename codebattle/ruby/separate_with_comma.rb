#Задача: separate_with_comma

#Given a number as input, return a string with that number formatted with commas to separate each three digits from the right to make it look like a standard North American number.

#Example: "1,238,592" == solution(1238592)


# BEGIN implement function `solution` here 
def solution n
  n.to_s.reverse.chars.each_slice(3).map(&:join).join(',').reverse
end
# END