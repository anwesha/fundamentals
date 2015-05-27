/*
Question :
Implement an algorithm to determine if a string has all unique characters.
What if you can not use additional data structures?
*/

// Method1 : O(n^2) time, no extra memory
function unique(str) {
    var len = str.length;
    var isUnique = true;
    for(var i=0; i<len -1; i++) {
        for(var j=i+1; j<len; j++) {
            if (str[i] == str[j]) {
                isUnique = false;
                break;
            }
        }
    }

    return isUnique;
}

var str = "apple"
console.log(str + " has all unique characters ? : " + unique(str));

var str1 = "abcde"
console.log(str + " has all unique characters ? : " + unique(str1) + "\n");


// Method2 : O(n) time, O(n) space
function unique2(str) {
    var charSet  = {};
    for(var i=0; i<str.length; i++) {
        if (charSet[str[i]]) {
            return false;
        }

        charSet[str[i]] = true;
    }

    return true;
}

var str = "apple has a name"
console.log(str + " has all unique characters ? : " + unique2(str));

var str1 = "abcde fgh"
console.log(str + " has all unique characters ? : " + unique2(str1) + "\n");
// REMEMBER : space is also counted as a character


// Method3 : assuming on ASCII char
function unique3(str) {

    if (!str) {
        return "please provide valid string as input";
    }

    var charMap = new Array(26); // 26 elements
    var len = str.length;
    var charMapIndex;

    for (var i=0; i<len; i++) {
        charMapIndex = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (charMap[charMapIndex]) {
            return false;
        }
        charMap[charMapIndex] = true;
    }

    return true;
}

/*
process.stdin.on("readable", function () {
    var str = process.stdin.read();

    if (str) {
        console.log(unique3(str.toString('utf-8').trim()));
    }
});
*/


// TODO :
// 1) sorted string implementation
// 2) bitwise operation

//----------------------------------------------------------------------------------------------------------------------
/*
Question :
Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer.
NOTE: One or two additional variables are fine. An extra copy of the array is not.
FOLLOW UP
Write the test cases for this method.
*/

// Method1 : using split array :  O(n^2)
function removeDupes (str) {
    if (!str) {
        return "please pass in valid input";
    }

    var strArr = str.split("");
    var curChar;
    for(var i=0; i<str.length -1; i++) {
        curChar =strArr[i];
        for(var j=i+1; j<str.length; j++) {
            strArr[j] = strArr[j] === curChar ? "" : strArr[j];
        }
    }

    return strArr.join("");
}

var str = "orangutang";
console.log(removeDupes(str));


// TEST cases
/*
1. String does not contain any duplicates, e.g.: abcd
2. String contains all duplicates, e.g.: aaaa
3. Null string
4. String with all continuous duplicates, e.g.: aaabbb
5. String with non-contiguous duplicate, e.g.: abababa

ASSUME only lowercase or uppercase and only alphabets
*/

// Method2 : use String concatenation and more memory
function removeDupes2(str) {
    if (!str) {
        return "please pass in valid input";
    }

    var len = str.length,
        map = new Array(26),
        nodupe = "",
        i;

    for(i=0; i<len; i++) {
        if (map.indexOf(str[i]) === -1) {
            nodupe += str[i];
            map.push(str[i]);
        }
    }

    return nodupe;
}

var str = "orangutang";
console.log(removeDupes2(str));
