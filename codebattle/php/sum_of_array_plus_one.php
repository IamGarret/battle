<?php
//Задача: sum_of_array_plus_one

//Given an array of integers, return the sum of integers after adding 1 to each one.

//Example: 16 == solution([12,-3,0,3])

// my version:
function solution ($a) {
	$sum = 0;
	foreach ($a as $k=>$v) {
		$sum += $v+1;
	}
    return $sum;
}
