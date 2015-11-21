<?php

//Задача: perfect_numbers

//Determine if a given number is "perfect". Perfect number is a positive integer that is equal to the sum of its proper positive divisors (the sum of its positive divisors excluding the number itself).

//Example: true == solution(6)

// my version 
function solution($num){	
    $sum = 0;
	for ($i=1; $i <= ($num/2); $i++) {
        if (fmod($num, $i) == 0) {
        	$sum += $i;
		}            
	}
    if ($sum == $num) return true;
	else return false;    
}

