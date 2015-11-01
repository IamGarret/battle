//Задача: array_transpose

//Implement the matrix transposition function. Matrices are presented as arrays of arrays, where internal arrays are rows of the matrix. There are several different ways to transpose a matrix: 1) reflect the array over its main diagonal (which runs from top-left to bottom-right); 2) write the rows of the original matrix as columns of the new one; 3) write the columns of the original matrix as rows of the new one.

//Example: [[1,"a"],[2,"b"],[3,"c"]] == solution([[1,2,3],["a","b","c"]])

//https://github.com/h/b/blob/master/src/b/issues/array_transpose.clj

// BEGIN implement function `solution` here 
function solution(arr) {
  var result = [];
  if(arr[0]) {
    arr[0].forEach(function(item, i) {
      var resultItems = [];
      arr.forEach(function(o, j) {
        resultItems.push(arr[j][i]);
      });
      result.push(resultItems);
    });
  }
  return result;
}
// END

module.exports = solution;