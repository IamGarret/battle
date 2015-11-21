//Задача: nrzi_encoding

//Non return to zero, inverted (NRZI) is a method of mapping a binary signal to a physical signal for transmission over some transmission media. The two level NRZI signal has a transition at a clock boundary if the bit being transmitted is a logical 1, and does not have a transition if the bit being transmitted is a logical 0.

//             0 100 10000 100 1 1 1
//             ?|___|?????|___|?|_|?
//Example: "010010000100111" == solution("\u00af|___|\u00af\u00af\u00af\u00af\u00af|___|\u00af|_|\u00af")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/nrzi_encoding.clj

//1 вариант: module.exports = (s)=>s.replace(/\|_|\|¯/g, "1").replace(/[^\d]/g,"0")

// BEGIN implement function `solution` here 
function solution(str) {
  var b = 0;
  var res = '' + b;
  str = str.split('');
  str.splice(0, 1);
  str.forEach(el => {
    if (el === '|') b = 1;
    else {
      res += b;
      b = 0;
    }
  });
  return res;
}
// END

module.exports = solution;