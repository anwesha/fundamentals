// QUESTION: replace spaces with %20 or %23




var replaceFuncs = {
    usingNative: function (str) {
        return str.replace(/\s+/g, "%23");
    },

    usingArray: function(str) {
        var arr = str.split("");
        var spaceCount = 0;
        var newLen;

        // calculate the number of spaces
        arr.forEach(function (c) {
            spaceCount = c === " " ? spaceCount + 1 : spaceCount;
        });

        // calculate new length of the array
        newLen = str.length + spaceCount * 2; // %23 is 3 characters " " already is one char

        for(var i=str.length - 1; i>=0; i--) {
            if (str[i] === " ") {
                arr[newLen - 1] = "3";
                arr[newLen - 2] = "2";
                arr[newLen - 3] = "%";
                newLen =  newLen - 3;
            } else {
                arr[newLen -1] = str[i];
                newLen = newLen - 1;
            }
        }

        return arr.join("");
    }
};

var test = "mary had a little lamb";

console.log('USING NATIVE METHODS');
console.log(replaceFuncs.usingNative(test));

console.log('\nUSING ARRAYS');
console.log(replaceFuncs.usingArray(test));
