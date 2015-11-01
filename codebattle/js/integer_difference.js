//Задача: integer_difference

//Find how many pairs X, Y there are in the array, such that abs(X-Y) is equal to the first argument.

//Example: 3 == solution(4, [1,1,5,6,9,16,27])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/integer_difference.clj

module.exports = (k, arr)=>{
  var res = 0;
  
  arr.forEach((a,i)=>{
    arr.forEach((b,j)=>{
      if (j>i && Math.abs(a-b) == k)
        res++
    })
  })
  return res
};