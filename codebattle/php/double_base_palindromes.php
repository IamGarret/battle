<?php 

//Задача: double_base_palindromes

//The decimal number 585 is 1001001001 in binary. It is palindromic in both bases. Find n-th palindromic number.

//Example: 5 == solution(3)

//https://github.com/h/b/blob/master/src/b/issues/double_base_palindromes.clj

function checkIfPal($n) { 
    $n = (string) $n; 
    $len = strlen($n); 
    for($i=0; $i<(int) ($len/2); $i++) { 
        if( $n[$i] != $n[$len-1-$i] ) { 
        	return false; 
		}
    } 
    return true; 
} 

function solution($n) { 
    $curN = 0; 
    $curValue = 0; 
    while($curN != $n) { 
        $curValue++; 
        while( !(checkIfPal( $curValue )) || !(checkIfPal( decbin($curValue) )) ){ 
        	$curValue++; 
        } 
        $curN++; 
    } 
    return $curValue; 
}

echo solution(20);

?>