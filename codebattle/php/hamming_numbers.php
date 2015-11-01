<?php

//Задача: hamming_numbers

//The sequence of Hamming numbers 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36, … consists of all numbers of the form 2^i·3^j·5^k where i, j and k are non-negative integers. Generate n-th number.

//Example: 36 == solution(20)

//https://github.com/h/b/blob/master/src/b/issues/hamming_numbers.clj

// BEGIN implement function `solution` here 
function fill($n) {
    $res = [];
    for ($i = 0;$i<$n;$i++)
        $res[] = 1;
}
function solution($limit) {
    
    $h = fill($limit);
    $x2 = 2;
    $x3 = 3;
    $x5 = 5;
    $i = $j = $k = 0;
    for ($n = 1;$n<$limit;$n++) {
        $h[$n] = min($x2, $x3, $x5);
        if ($x2 == $h[$n])
        {
            $i++;
            $x2 = 2 * $h[$i];
        }
        if ($x3 == $h[$n]) {
            $j++;
            $x3 = 3 * $h[$j];
        }
        if ($x5 == $h[$n]) {
            $k++;
            $x5 = 5 * $h[$k];
        }
    }
    return end($h);
}
// END
