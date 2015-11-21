//Задача: supremum_syracuse

//Find the largest element in the Syracuse sequence.

//Example: 16 == solution(6)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/supremum_syracuse.clj

function solution(x)
{
  var temp = x
  
  while (x != 1)
    {
      x = (x % 2 == 0) ? x/2 : 3*
      
      if (x > temp)
        temp = x;
      
    }
  
  return temp;
}

module.exports = solution;