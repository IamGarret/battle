<?php

//Задача: build_hash_with_default

//Return a new hash map with elements of the given array as keys, and the given default value as values for those keys.

//Example: {"draft":0,"completed":0} == solution(["draft","completed"], 0)

//my version:

function solution ($arr, $value) {
	$array = array_flip($arr);
    foreach ($array as $k=>$v){
		$array[$k] = $value;        
	}
    return $array;
}
