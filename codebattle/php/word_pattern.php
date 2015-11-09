<?php

//Задача: word_pattern

//Given a pattern and a string str, find if str follows the same pattern. Examples pattern = " abba ", str = " dog cat cat dog " should return true.

//Example: true == solution("zzbinqs", "dragonborn dragonborn by his honor in sworm")

//https://github.com/Hexlet/battle_asserts/blob/master/src/battle_asserts/issues/word_pattern.clj

// BEGIN implement function `solution` here 

function solution($pattern, $s) {
    $words = preg_split('#\s+#', trim($s));
    
    if (count($words) != strlen($pattern))
        return false;
    
    $dict = array();
	for ($i = 0; $i < count($words); ++$i) {
		$curWord = $words[$i];
        $curLetter = $pattern[$i];
        if (isset($dict[$curLetter])) {
            if ($dict[$curLetter] !== $curWord)
                return false;
        } else {
            $dict[$curLetter] = $curWord;
        }
    }
    return true;
}

// END