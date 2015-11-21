<?php

//Задача: clock_angle

//Calculate the angle between an hour and a minute hand at a given time.

//Example: 7.5 == solution(3, 15)

// my version: 
function solution ($hour, $min){
	$hour_a = $hour*360/12 + $min*360/720;
    $min_a = 360*$min/60;
    $angle = abs($hour_a - $min_a); 
	return $angle;
}
