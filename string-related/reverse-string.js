// slow
// Reverse with only native methods
function reverse1(str) {
    if (typeof str !== "string") {
        return "please pass in a valid string to reverse";
    }

    return str.split("").reverse().join("");
}


// slow
// Reverse with two arrays and native methods
function reverse2(str) {
    if (typeof str !== "string") {
        return "please pass in a valid string to reverse";
    }

    var arr = str.split("");
    var ret = [];

    for(var i=arr.length - 1; i>= 0; i--) {
        ret.push(arr[i]);
    }

    return ret.join("");
}

// better than 1,3
// Reverse with in place reversal with on array but native methods
function reverse4(str) {
    if (typeof str !== "string") {
        return "please pass in a valid string to reverse";
    }

    var arr = str.split("");
    var len = arr.length;
    var mid = Math.floor(len/2);
    var temp;

    var back = "", front = "";

    for(var i=0,j=len -1; i<mid && j>=mid; i++,j--) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr.join("");
}

// fastest
// Reverse with string concatenation;
function reverse3(str) {
    if (typeof str !== "string") {
        return "please pass in a valid string to reverse";
    }

    var revStr = "";
    for(var i=str.length-1; i>=0; i--) {
        revStr += str[i];
    }

    return revStr;
}

var str = "Hello World";


console.log(reverse1(str));
console.log(reverse2(str));
console.log(reverse3(str));
console.log(reverse4(str));
