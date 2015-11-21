#Задача: sort_elements_by_frequency

#Given an array of integers, sort the array according to frequency of elements. Most frequent numbers come first. If several groups of the same size exist, they should appear in the order of corresponding numbers in the input array.

#Example: [3,3,3,3,2,2,2,12,12,4,5] == solution([2,3,2,4,5,12,2,3,3,3,12])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/sort_elements_by_frequency.clj

# BEGIN implement function `solution` here 
def solution(arr)
  arr.
    group_by{|i| i}.
    sort_by{|k,v| -v.size}.
    map{|k,v| v }.
    flatten}
end
# END



