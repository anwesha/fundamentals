/*

// Unique

function isUnique(str) {
    var count = 0;
    for (var i=0; i<str.length; i++) {
        count = 0;
        for(var j=0; j<str.length; j++) {
            if (str[j] == str[i]) {
                count++;
            }

            if (count > 1) {
                return false;
            }
        }
    }

    return true;

}

function isUnique(str) {
   var charObj = {};
   for (var i=0; i< str.length; i++) {
        if (charObj[str[i]]) {
            charObj[str[i]] += 1;
            return false;
        } else {
            charObj[str[i]] = 1;
        }
   }

   return true;
}


function isUnique(str) {
    var charArr = new Array(26);
    var code;
    for (var i=0; i<str.length; i++) {
        code = str.charCodeAt(i) - 'a'.charCodeAt(0);

        if (charArr[code]) {
            return false;
        } else {
            charArr[code] = 1;
        }
    }

    return true;
}

console.log(isUnique('abcd'));
console.log(isUnique('aabb'));
console.log(isUnique('anwesha'));

// Palindrome

function isPalindrome(str) {
    if (str.length <= 0) return true;
    if (str[0] != str[str.length -1]) return false;
    return isPalindrome(str.substr(1, str.length - 2));
}

function isPalindrome(str) {
    for(var i=0; i< str.length/2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('anwesha'))
console.log(isPalindrome('malayalam'));




// Permutation

function isPermutation(str1, str2) {
    str1 = str1.split('').sort().join();
    str2 = str2.split('').sort().join();
    if (str1 !== str2) {
        return false;
    }

    return true;
}

*/

function isPermutation (str1, str2) {
    var charmap1 = {};
    var charmap2 = {};
    var ret = true;

    if (str1.length != str2.length) {
        return false;
    }

    for (var i=0; i<str1.length; i++) {
        if (charmap1[str1[i]] ) {
            charmap1[str1[i]]++;
        } else {
            charmap1[str1[i]] = 1
        }
    }

    for (var j=0; j<str2.length; j++) {
        if (charmap2[str2[j]] ) {
            charmap2[str2[j]]++;
        } else {
            charmap2[str2[j]] = 1
        }
    }


    Object.keys(charmap1).forEach(function (key) {
        if (charmap2[key] != charmap1[key]) {
            ret = false;
        }
    });

    return ret;
}


console.log(isPermutation('abc', 'bdd'));
console.log(isPermutation('cat dog', 'tac god'));