<?php

//Задача: nrzi_encoding

//Non return to zero, inverted (NRZI) is a method of mapping a binary signal to a physical signal for transmission over some transmission media. The two level NRZI signal has a transition at a clock boundary if the bit being transmitted is a logical 1, and does not have a transition if the bit being transmitted is a logical 0.

//             0 100 10000 100 1 1 1
//             ?|___|?????|___|?|_|?
//Example: "010010000100111" == solution("?|___|?????|___|?|_|?")

// BEGIN implement function `solution` here 

function solution($s) {
	$s = mb_convert_encoding($s, 'latin1', 'utf8');
    $result = '0';
    $skip = false;
    for ($i = 1; $i < strlen($s); ++$i) {
        if ($s[$i] === '|') {
            $result .= '1';
            $skip = true;
        } elseif ($skip) {
            $skip = false;
        } else {
            $result .= '0';
        }
    }
    return $result;
}

// END

//my version:

function solution ($a){
	
    $arr = array ("|_"=>"1","|?"=>"1","?"=>"0","_"=>"0");
    $a = strtr ($a, $arr);
    return $a;
    
}