//Задача: domino

//The input contains the maximal number of dots on one end of a domino bone. Output the number of dots on the domino set. Sample 2 -> 12

//Example: 0 == solution(0)

//https://github.com/h/b/blob/master/src/b/issues/domino.clj

function solution(max) {
  var res = 0;
  for (var i = 0; i <= max; i++) {
    for (var j = i; j <= max; j++) {
      res += (i + j);
    }
  }
  
   return res;
}

module.exports = solution;