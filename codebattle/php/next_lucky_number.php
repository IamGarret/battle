<?php

//Задача: next_lucky_number

//Lucky numbers are defined as the numbers consisting only of digits 3 and 5. Write a function which, given a number N, returns the smallest lucky number strictly greater than N.

//Example: 5 == solution(4)

//my version:

function solution ($a) {   
    for ($a; ; $a++) {
		if (!(preg_match ('/[0-246-9]/', $a))) {
			return $a;
        }
    }    
}