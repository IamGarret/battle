<?php

//Задача: disjoint_sets

//Given two sets represented by two arrays, check if the given two sets are disjoint or not. Given arrays have no duplicates.

//Example: true == solution([12,34,11,9,3], [7,2,1,5])

//my version:

function solution ($a, $b) {
	return count(array_intersect($a,$b)) == 0;
}

//my version 2:

/* function solution ($a, $b) {
    $array = array();
	foreach ($a as $k=>$v) {
		foreach ($b as $k2=>$v2) {
			if ($v == $v2) $array[] .= $v;        
		}
	}
    if (empty($array)) return true;
    else return false;
} */