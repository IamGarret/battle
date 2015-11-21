<?php 

//Задача: string_made_of

//You are given a string, which contains entirely of decimal digits (0-9). Each digit is made of a certain number of dashes, as on LCD-display of calculator. For instance 1 is made of 2 dashes, 8 is made of 7 dashes and so on. You have to write a function that takes this string message and returns the count of dashes in the string message.

//Example: 18 == solution("12134")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/string_made_of.clj

function solution($a) { 

	$counts = array(6,2,5,5,4,5,6,3,7,6);
	$chars = preg_split('//', $a, -1, PREG_SPLIT_NO_EMPTY);
	$count = 0;

	foreach ($chars as $key => $value) {
		$count += $counts[$value];
	}

	return $count;

}

//my version:

function solution ($a){
	if (empty($a)) return 0;
	$arr = array(6,2,5,5,4,5,6,3,7,6);
	$b = str_split($a);
	$count = 0;
	foreach ($b as $k=>$v){
		$count += $arr[$v];
	}
	return $count;
}

//my version 2:

function solution ($a) {
	$arr = array(6,2,5,5,4,5,6,3,7,6);
    $sum = 0;
    $strtr = strtr ($a, $arr);
	$array = preg_split('//', $strtr, -1, PREG_SPLIT_NO_EMPTY);
	foreach ($array as $k=>$v) {     
		$sum += $v;        
	}
	return $sum;
}

?>