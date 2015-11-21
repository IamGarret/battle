//Задача: excel_sheet_column_number

//Given a column title (as it appears in an Excel sheet), return its corresponding column number. For example: A -> 1, B -> 2, C -> 3, ... Z -> 26, AA -> 27, AB -> 28

//Example: 666 == solution("YP")

// BEGIN implement function `solution` here 
function solution(str){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.toUpperCase().split('');
  console.log (str);
  var num = alphabet.indexOf(str[str.length-1])+1;
  var j = 0;
  for (var i = 0; i<=str.length-2; i++){
   	j = str.length - 2 - i;
    console.log(str[i],Math.pow(26,j+1));
    num+= Math.pow(26,j+1)*(alphabet.indexOf(str[i])+1);
    console.log(str[i],num);
  }
  return num
}

// END

module.exports = solution;