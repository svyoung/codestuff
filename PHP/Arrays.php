<?php

// configure the array so that the negative numbers are in the front, positive numbers are in the back while preserving the order

function negFirst($array) {
    foreach($array as $a) {
        if($a<0) {
            $neg[] = $a;
        } else {
            $pos[] = $a;
        }
    }
    return array_merge($neg, $pos);
}

$array1 = array(-2, 4, -10, 8, 9, 5, -8, -7, 10);
echo negFirst($array1);


// find the largest difference in the array A = B[i] - C[j] where j > i



function largestDiff($array) {
    $max = 0;
    $result = 0;

    for($i=count($array)-1; $i > 0; --$i) {
        if($array[$i] > $max) {
            $max = $array[$i];
        }

        $temp = $max - $array[$i];
        if($temp > $result) {
            $result = $temp;
        }
    }
    return $result;
}

$array2 = array(-2, 4, -10, 8, 9, 5, -8, -7, 10);
echo largestDiff($array2);