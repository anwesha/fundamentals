/*
Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, s1 and s2, write code to check if s2 is a rotation of s1
using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
*/

function rotation(s1, s2) {
    if (!s1 || !s2) {
        return "please pass valid strings";
    }

    if (s1.length !== s2.length) {
        return false;
    }

    var doubleS1 = s1 + s1;

    return doubleS1.indexOf(s2) !== -1;
}

var s1 = "apple";
var s2 = "leapp";
var s3 = "elapp";

console.log("Is " + s2 + " a rotation of " + s1 + " : " + rotation(s1,s2));
console.log("Is " + s3 + " a rotation of " + s1 + " : " + rotation(s1,s3));
