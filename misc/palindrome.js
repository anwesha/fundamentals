function isPalindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);
    var isPalindrome;

    /*
    for(var i=0, j=len-1; i<mid && j>=mid; i++, j--) {
        isPalindrome = str[i] === str[j];
    }
    */

    for(var i=0; i<mid; i++) {
        isPalindrome = str[i] === str[len - 1 - i];
    }

    return isPalindrome;
}


function recursivePalindrome(str, i) {
    var len = str.length;
    var stoppingCondition;
    if (len === 0 || len === 1) {
        return true;
    }

    i = i || 0;
    stoppingCondition = (i >= Math.floor(len/2))
    return  stoppingCondition || ((str[i] === str[len - 1 - i]) && recursivePalindrome(str, ++i));
}

var nonPal = "appla";
var pal    = "al0la";


console.log(isPalindrome(nonPal));
console.log(isPalindrome(pal));

console.log(recursivePalindrome(nonPal));
console.log(recursivePalindrome(pal));
