<?php

//Задача: fancy_number

//Given a number, find whether it is fancy or not. A fancy number is one which when rotated 180 degrees is the same.

//Example: true == solution("9081806")

//https://github.com/H/b/tree/master/src/b/issues/fancy_number.clj

function solution ($a){ 
	return $a == strtr(strrev($a),'9652473','6925___');
}