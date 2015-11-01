//Задача: first_repeating_element

//Given an array of integers, find the first repeating element in it. Find the element that occurs more than once and whose index of first occurrence is smallest.

//Example: 5 == solution([10,5,3,4,3,5,6])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/first_repeating_element.clj

module.exports = (n) => {
 for(var i = 0;i < n.length;i++){
  for(var j = i+1;j < n.length;j++){
    if(n[i] == n[j]) return n[i];
  }
 } 
  return null;
};