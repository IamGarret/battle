//Задача: sum_of_array_plus_one

//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

//Example: 16 == solution([12,-3,0,3])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/sum_of_array_plus_one.clj

// BEGIN implement function `solution` here 
function solution(arr){
  var s = 0;
  for(var i =0; i<arr.length;i++){
    s += 1 + arr[i];
  }
  return s;
}
// END

module.exports = solution;