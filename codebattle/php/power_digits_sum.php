<?php

//Задача: power_digits_sum

//Calculate the sum of digits of 2n For example, 215 = 32768, and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

//Example: 13 == solution(8)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/power_digits_sum.clj

// BEGIN implement function `solution` here 
function solution($a) {
    $a = pow(2, $a);
    return array_sum(str_split($a));
}
// END