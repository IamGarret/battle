#Задача: sum_of_array_plus_one

#Given an array of integers, return the sum of integers after adding 1 to each one.

#Example: 16 == solution([12,-3,0,3])

# BEGIN implement function `solution` here 

def solution(arr)
  sum = 0
  arr.each do |num|
    sum += num + 1
  end  
  sum
end

# END