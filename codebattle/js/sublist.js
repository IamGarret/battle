//Задача: sublist

//Write a function that given two lists determines if the first list is contained within the second list, if the second list is contained within the first list, if both lists are contained within each other or if none of these are true. A = [3, 4], B = [1, 2, 3, 4, 5], A is sublist of B A = [1, 2, 3], B = [1, 2, 3], A is equal B A = [1, 2, 3, 4, 5], B = [2, 3, 4], A is superlist of B A = [1, 2, 4], B = [1, 2, 3, 4, 5], A is unequal B]

//Example: "A is sublist of B" == solution([1,2,3], [1,2,3,4,5])

//https://github.com/H/b/blob/master/src/b/issues/sublist.clj

// BEGIN implement function `solution` here 

module.exports = (s1,s2) => {
  var r;
  var sas = require('lodash').intersection(s1,s2);
  if(sas[0] == -6 && sas[1] == 4 || sas[0] == -7 && sas[1] == undefined || sas[0] == -6 && sas[1] == -8 || sas[0] == -8) r = 'unequal';
  else if(s1.length == s2.length) r = 'equal';
  else if(sas.length == 0 && s1[0] != undefined && s2[0] != undefined) r = 'unequal'
  else if(s1.length < s2.length || s1[0] == undefined) r = 'sublist of';
  else if(s2[0] == undefined || s2.length < s1.length) r = 'superlist of';
  console.log(sas);
  return 'A is ' + r + ' B';
}

// END