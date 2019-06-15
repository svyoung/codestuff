/**
 You will be given an inventory of small bags (1 kilo each) and big bags
 (5 kilos each) along with the goal amount of kilos we need to ship the customer.  Return the amount of small bags the package
 will contain assuming we always use big bags first.  Return -1 if it cannot be done.

 If the total is less than or equal to the goal, we calculate the remaining kilos by subtracting the goal and total kilos,
 we get the remaining of the remaining 5 kilos, and add the initial given small bag.
 */

function getSmallBags(small, big, goal) {
    var totalKilos = (big * 5) + small;

    if(totalKilos <= goal) {
        var remainingKilos = goal - totalKilos;
        return remainingKilos % 5 + small;
    } else {
        return -1;
    }
}

console.log(getSmallBags(10, 2, 26));


/*****************************************
 * Repeated Strings
 * https://www.hackerrank.com/challenges/repeated-string/problem
 *
 * Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
 * Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's
 * infinite string.
 *
 * For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac,
 * the first  characters of her infinite string. There are 4 occurrences of a in the substring.
 */

function repeatedString(s, n) {
    var aCounts = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCounts++;
        }
    }
    var noOfOcc = Math.floor(n / s.length),
        mod = n % s.length, nss;
    nss = s.slice(0, -(s.length - mod));
    var aCounts2 = 0;
    for (var j = 0; j < nss.length; j++) {
        if (nss[j] === 'a') {
            aCounts2++;
        }
    }
    return ((noOfOcc * aCounts) + aCounts2);
}

console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
// this code works with a large number to consider with repeat because of memory limitation.


/******************************************
 * Return true if array has 3 consecutive numbers, false otherwise
 ****************************************8*/

function threeConsecNumExists(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i + 1] == array[i] + 1 && array[i + 2] == array[i] + 2) {
            return true;
        }
    }
    return false;
}

array1 = [4,8,2,6,8,6,7,4,9,1];

console.log(threeConsecNumExists(array1));


/********************************************
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 *
 * Complete the sockMerchant function in the editor below. It must return an integer
 * representing the number of matching pairs of socks that are available.
 *
 * For example, there are n = 7 socks with colors ar = [1,2,1,2,,3,2]. There is one pair
 * of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
 */

function sockMerchant(n, ar) {
    var count = 0;
    ar.sort();

    for(var i = 0; i < n - 1; i++) {
        if(ar[i] === ar[i+1]) {
            count++;
            i++;
        }
    }
    return count;
}

num = 11;
arr = [1, 1, 2, 4, 2, 4, 6, 9, 2, 9, 5];

console.log(sockMerchant(num, arr));

/**********************************************
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 *
 * Emma is playing a new mobile game that starts with consecutively numbered clouds.
 * Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus
 * cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must
 * avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from
 * her starting position to the last cloud. It is always possible to win the game.
 */

function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;

    while (true) {
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        } else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        count++;
    }
    return count;
}