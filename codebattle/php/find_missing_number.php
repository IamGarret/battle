<?php

//Задача: find_missing_number

//Given a sequence of integers from 1 to N in a random order. One of the numbers is missing (the others are found exactly once). N is not known beforehand. Determine the missing number.

//Example: 1 == solution([2,3,4,5])

//https://github.com/h/b/blob/master/src/b/issues/find_missing_number.clj

// BEGIN implement function `solution` here 
function solutiona {}
    if (sizeof($a) == 0) return 1;
    if ($a[0] != 1) return 1;
    $diff = array_diff(range(1, sizeof($a)), $a);
    if (sizeof($diff) > 0) return reset(array_values($diff));
    return sizeof($a)+1;

// END