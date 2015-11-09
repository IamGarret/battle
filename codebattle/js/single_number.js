//Задача: single_number

//Given an array of integers, every element appears twice except for one. Find that single one.

//Example: 6 == solution([8,6,8,7,2,2,7,1,9,9,1])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/single_number.clj

module.exports = (a) => {
  a.sort()
  
  for (var k = 0; k < a.length - 1; k+=2)
    {
      if (a[k] != a[k+1])
        return a[k]
    }
  return a[a.length -1]
}