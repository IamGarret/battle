//Задача: twenty_one

//#FIXME Напишите функцию принимающую на вход массив и проверяющую равна ли сумма чисел в массиве 21

//Example: true == solution([3,4,5,6,3])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/twenty_one.clj

module.exports = (arr) => {
 return arr.reduce((a,v) => {return a+= v;}) == 21; 
};