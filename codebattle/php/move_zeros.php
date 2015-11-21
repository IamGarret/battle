<?php

//Задача: move_zeros

//Moves all 0's to the end the array while maintaining the relative order of the non-zero elements.

//Example: [1,3,12,0,0] == solution([0,1,0,3,12])

// BEGIN implement function `solution` here 

//my version:

function solution($a) {
    $b = array();
    $c = array();
    foreach ($a as $k=>$v){	
        if ($v != 0){
			$b[] .= $v;
        } else {
            $c[] .= $v;
		}	        
    }
    $d = array_merge ($b, $c);
    return $d;
}

// END