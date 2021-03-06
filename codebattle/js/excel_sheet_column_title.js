//Задача: excel_sheet_column_title

//Given a positive integer, return its corresponding column title as it appears in an Excel sheet. For example: 1 -> A, 2 -> B, 3 -> C, ..., 26 -> Z, 27 -> AA, 28 -> AB

//Example: "YP" == solution(666)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/excel_sheet_column_title.clj

function solution(n){
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var s = "";
	while(n>0){
      var m = n % 26 -1;
      if(m<0){m+=26,n--};
      s= a[m] + s;
      n = (n/ 26) >> 0;
    }
  
  return s;
}

module.exports = solution

//alternative:

/* function solution(x)
{
  return toLetters(x)
}
// END
function toLetters(num) {
    var mod = num % 26,
        pow = num / 26 | 0,
        out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    return pow ? toLetters(pow) + out : out;
}

module.exports = solution; */