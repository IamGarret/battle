<?php
//Задача: difference_of_squares

//Find the difference between the square of the sum and the sum of the squares of the first N natural numbers. The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 10**2 = 385 Hence, the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

//Example: 170 == solution(5)

// my version:
function solution ($a) {
	$sum_sq = 0;
    $sum = 0;
	for ($i = 1; $i <= $a; $i++) {
    	$sum += $i;
        $sum_sq += $i*$i;
	}
	return $sum*$sum - $sum_sq;
}