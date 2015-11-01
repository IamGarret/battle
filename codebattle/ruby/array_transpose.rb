#Задача: array_transpose

#Implement the matrix transposition function. Matrices are presented as arrays of arrays, where internal arrays are rows of the matrix. There are several different ways to transpose a matrix: 1) reflect the array over its main diagonal (which runs from top-left to bottom-right); 2) write the rows of the original matrix as columns of the new one; 3) write the columns of the original matrix as rows of the new one.

#Example: [[1,"a"],[2,"b"],[3,"c"]] == solution([[1,2,3],["a","b","c"]])

#https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/array_transpose.clj

# BEGIN implement function `solution` here 
def solution(input)
  return [] if input.empty?
  output = Array.new(input[0].length) {[]}
  input[0].length.times do |j|
    input.map{|n| output[j] << n.shift}
  end
  output
end
# END