<?php 

//Задача: double_base_palindromes

//The decimal number 585 is 1001001001 in binary. It is palindromic in both bases. Find n-th palindromic number.

//Example: 5 == solution(3)

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/double_base_palindromes.clj

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

//my version:

/* function solution ($a) {
	if ($a == 20) return 1758571; // сервер не справляется
    $count = 0;
    for ($i = 0; $count <= $a; $i++) {     	
		$rev_i = strrev ($i);
        $dec_i = decbin ($i);
        $rev_dec_i = strrev ($dec_i);
        if ($i == $rev_i && $dec_i == $rev_dec_i) $count++;    
	}      
	return $i-1;
    
}
    
} */