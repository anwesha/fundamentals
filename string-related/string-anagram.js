// QUESTION : Write a method to decide if two strings are anagrams or not.

// METHOD 1: sort two strings and compare them
function iSort(str) {
    var key;
    var arr = str.split("");
    for (var i=1; i<str.length; i++ ) {
        key = arr[i];
        for (j=i-1; j>=0 && arr[j] > key; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }

    return arr.join("");
}

function isAnagramBySort(str1, str2) {
    if (!str1 || !str2) {
        return "please pass in valid strings";
    }

    if (str1.length !== str2.length) {
        return false;
    }

    return iSort(str1) === iSort(str2);

}

var str1 = "armyg";
var str2 = "marys";
console.log(isAnagramBySort(str1, str2));


// METHOD 2 : check if both has the same count of unique characters
function isAnagramByCharMapCount(str1, str2) {
    if (!str1 || !str2) {
        return "please pass in valid strings";
    }

    if (str1.length !== str2.length) {
        return false;
    }

    var charMap1 = {};
    var numOfUniqueChars =0;
    var numOfCompletedCharStr2 = 0;
    var curChar;

    str1.split("").forEach(function (c) {
        if (charMap1[c]) {
            charMap1[c] += 1;
        } else {
            charMap1[c] = 1;
            numOfUniqueChars++;
        }
    });

    for(var i=0; i<str2.length; i++) {
        curChar = str2[i];
        // even if one char in str2 is differnt means they arent anagrams
        if(!charMap1[curChar]) {
            return false;
        }

        charMap1[curChar] -= 1;
        if(charMap1[curChar] === 0) {
            // means we have completed the max number of times curChar appears in str2
            numOfCompletedCharStr2++;

            // if number of completed characters is = to number of unique characters then we are done
            if (numOfCompletedCharStr2 === numOfUniqueChars) {
                return true;
            }
        }
    }

    return false;
}

console.log(isAnagramByCharMapCount("appp", "appp"));
