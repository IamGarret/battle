<?php

//Задача: happy_numbers

//Happy numbers are positive integers that follow a particular formula: take each individual digit, square it, and then sum the squares to get a new number. Repeat with the new number and eventually, you might get to a number whose squared sum is 1. This is a happy number. An unhappy number (or sad number) is one that loops endlessly. Write a function that determines if a number is happy or not.

//Example: true == solution(7)

// BEGIN implement function `solution` here 
function getNum($var)
{
    $arr = str_split($var);
    $sum = 0;
    foreach($arr as $digit){
        $sum += $digit*$digit;
    }
    return $sum;
}
function solution($var){
    for($i=0;$i<1000;$i++){
        if($var == 1){
            return true;
        }
        $var = getNum($var);
    }
    return false;
}
// END

/* <?php
function solution($n) {
    $old = [];
    $counter = 0;
    while(20 > $counter++) {
        $num = (string)$n;
        $n = 0;
        for($i = 0; $i < strlen($num); $i++) {
            $n += pow($num[$i], 2);
        }        
        var_dump($num);
        if ($n == 1) {
            return true;
        }
    }
} */