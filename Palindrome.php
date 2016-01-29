<?php


class Palindrome {

	function isPalindrome($str) {

		$new = str_replace(" ", "", strtolower($str));
		$map = array();
		$len = strlen($new);

		for($i=0; $i<$len;$i++) {
			$map[$new[$i]]++;
		}

		$odd = 0;
		foreach($map as $key => $m) {
			if($map[$key] % 2 != 0) {
				$odd++;
			}
		}

		//rearrange to form a palindrome
		if($odd == 1) {
			$left = array();
			$middle = "";
			foreach($map as $key => $m) {
				for($i=1; $i<=round($m/2); $i++) {
					if($map[$key] % 2 == 0) {
						$left[] = $key;
					} else {
						$middle = $key;
					}
				}
				
			}
			$leftstring = implode($left);
			$reverse = strrev($leftstring);
			$palindrome = $leftstring.$middle.$reverse;
			return $palindrome;
		} else {
			return false;
		}

	}

}