//Задача: array_fetch

//Given an array, an index, and a default value as input, return the element by that index; if no element exists with given index then return the default value. Index can be a negative integer, which means going over the array backwards from the end.

//Example: "b" == solution(["a","b","c"], 1, "d")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/array_fetch.clj

// BEGIN implement function `solution` here 
function solution(x, y, z)
{
  if (Math.abs(y) > x.length - ((y < 0) ? 0 : 1)  || x.length == 0)
    return z
    
  return (y < 0) ? x[x.length + y] : x[y];
}
// END

module.exports = solution;