<?php

//Задача: count_smaller_elements_on_right_side

//For each element X of the given array, count how many elements to the right of X are smaller than X. The last value is always zero since there are no elements to the right of the last element.

//Example: [6,1,1,1,0,1,0] == solution([12,1,2,3,0,11,4])

//my version:

function solution ($a) {
	$a_minus = $a;
    unset($a_minus[0]);
    $count = 0;
    $count_arr = array();
	foreach ($a as $k=>$v) {
		foreach ($a_minus as $k2=>$v2) {
			if ($v > $v2 && $k <= ($k2 - 1)) {
				$count++;                
            }            
        }
        $count_arr[] .= $count;
        $count = 0; 
	}
    array_pop ($count_arr);
	$count_arr[] .= 0;
    if (empty($a)) array_pop ($count_arr);
	return $count_arr;
}