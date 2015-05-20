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


// TODO implement
function recursivePalindrome(str) {

}

var nonPal = "apple";
var pal    = "al0la";

console.log(isPalindrome(nonPal));
console.log(isPalindrome(pal));
