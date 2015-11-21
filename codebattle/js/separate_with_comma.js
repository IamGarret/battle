//Задача: separate_with_comma

//Given a number as input, return a string with that number formatted with commas to separate each three digits from the right to make it look like a standard North American number.

//Example: "1,238,592" == solution(1238592)

// BEGIN implement function `solution` here 
function solution(n) {
  n = n.toString();
  var q = '';
  var j = 0;
  for(var i = n.length; i--;) {
    q = n[i] + q;
    if (j++ === 2 && i !== 0) {q = ',' + q;j=0;}
  }
  return q;
}
// END

module.exports = solution;