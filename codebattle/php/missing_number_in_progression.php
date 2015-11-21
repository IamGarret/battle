<?php

//Задача: missing_number_in_progression

//Given an array that represents elements of an arithmetic progression in order. One element is missing in the progression. Return the missing number.

//Example: 6 == solution([2,4,8,10,12,14])

//my version: 

function solution ($a) {
    $del = $a[1] - $a[0];
    if (array_key_exists(2, $a)) {
        $del2 = $a[2] - $a[1];
        if ($del != $del2) $del = $del2;
    } else $del = $del/count($a);
	foreach ($a as $k=>$v) {
        if ($v + $del != next($a)) {
			return $v + $del;          
		}        
	}	
}

//my version 2:

function solution ($a) {
	$count_arr = count($a);
    $end = end ($a);
    $first = $a[0];
	$del = ($end - $first)/$count_arr;
    $progression = array();
    for ($i = 0; $i <= $count_arr; $i++) {
		$progression[] .= $first + $del*$i;
	}
    $num = sort (array_diff ($progression, $a));   
	return $num;
}