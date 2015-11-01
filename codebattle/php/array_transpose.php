<?php

//Задача: array_transpose

//Implement the matrix transposition function. Matrices are presented as arrays of arrays, where internal arrays are rows of the matrix. There are several different ways to transpose a matrix: 1) reflect the array over its main diagonal (which runs from top-left to bottom-right); 2) write the rows of the original matrix as columns of the new one; 3) write the columns of the original matrix as rows of the new one.

//Example: [[1,"a"],[2,"b"],[3,"c"]] == solution([[1,2,3],["a","b","c"]])

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/array_transpose.clj

function solution($a) {
    $c = count($a);
    $out = array();
    if ($c > 0) {
    $q = count($a[0]);
    for ($ii = 0; $ii < $q; $ii++) {
    	$qq = array();
    	for ($i = 0; $i < $c; $i++) {
        	$qq[] = $a[$i][$ii];
    	}
        $out[] = $qq;
    }
    }
    return $out;
}