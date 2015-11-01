<?php

//Задача: factorial_trailing_zeroes

//Return the number of trailing zeroes in n! For example, 5! = 120, the number of trailing zeros is 1; 10! = 3 628 800, the number of trailing zeros is 2.

//Example: 6 == solution(28)

//https://github.com/h/b/blob/master/src/b/issues/factorial_trailing_zeroes.clj

// BEGIN implement function `solution` here 
function solution($number) {
    if ($number < 0)
        return -1;
    if ($number == 5)
        return 1;
    $count = 0;
    for ($j = 5;$number/$j>=1;$j*=5) {
        $count += floor($number / $j);
    }
    return $count;
}
// END