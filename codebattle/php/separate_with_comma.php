<?php

//Задача: separate_with_comma

//Напишите функцию, которая принимает на вход число и возвращяет в качестве результата строку со входным числом разбитым запятыми по разрядам

//Example: "1,238,592" == solution(1238592)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/separate_with_comma.clj

// BEGIN implement function `solution` here 
function solution($a) {
    return number_format($a);
}
// END