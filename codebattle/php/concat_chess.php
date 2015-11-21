<?php

//Задача: concat_chess

//Concatenate 2 strings by characters, one by one. In other words, take the 1st char from the first string, then 1st char from the second string, then 2nd char from the first string, then 2nd char from the second string, and so on. If on string ends before the other, just continue with the remaining characters.

//Example: "awbxcydz" == solution("abcd", "wxyz")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/concat_chess.clj

// BEGIN implement function `solution` here 
function solution($a,$b) {
    $res = '';
    for ($i = 0;$i<max(strlen($a), strlen($b));$i++) {
        if (isset($a[$i])) $res .= $a[$i];
        if (isset($b[$i])) $res .= $b[$i];
    }
    return $res;
}
// END

//my version:

function solution ($a, $b) {
	$a_arr = str_split ($a, 1);
	$b_arr = str_split ($b, 1);
	$string = '';
	foreach ($a_arr as $k=>$v) {
		$string .= $v;
        if (array_key_exists ($k, $b_arr)) $string .= $b_arr[$k];
	}
	$string .= substr($b, strlen($a), strlen($b));	
	return $string;
}