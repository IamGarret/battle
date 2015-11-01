<?php

//Задача: sum_primes

//Write some code to sum all primes from 2 up to a given number.

//Example: 4227 == solution(200)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/sum_primes.clj

// BEGIN implement function `solution` here 
function solution($a) {
    $res = 0;
    $prime = function($x) {
        if ($x == 1) return false;
        if ($x == 2) return true;
        if ($x % 2 == 0) return false;
        for ($i = 3;$i<=ceil(sqrt($x));$i=$i+2) {
            if ($x % $i == 0) return false;
        }
        return true;
    };
    for ($i = 2;$i<$a;$i++) {
        if ($prime($i)) $res += $i;
    }
    return $res;
}
// END