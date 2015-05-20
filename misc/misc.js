// fundamentals

// simple string reverse
var str = "hello world";
console.log(str.split("").reverse().join(""));

// NOTE ::
// Javascript strings are immutable.
// eg : if you have str = "hello"; you cant do str[3] = "w";
// string manipulations like trim, slice, returns new strings


console.log("\n\n ===============");

console.log("1" + 12);
console.log("1" + "hello");
console.log(1 + "23");
console.log(1 + "23" + 2);
console.log(1 + 2 + "23");
console.log("23" + 1 + 2);

// slice : start : 0 based, end : doesnt include the last argument
// use negative values to specify which item from end. starts with -1
// doesnt modify original array
console.log("\nSLICE MAGIC ->");

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3)); // ["Orange", "Lemon"]
console.log(fruits.slice(-2, -1));  // ["Apple"]

console.log("\nSPLICE MAGIC ->");
// splice : start 0 based, how many items
// modifies original array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.splice(1,3)); // ["Orange", "Lemon", "Apple"];
console.log(fruits);


/*
- The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
- This method extracts the characters in a string between "start" and "end", not including "end" itself.
- If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1).
- If either "start" or "stop" is less than 0, it is treated as if it were 0.
- The substring() method does not change the original string.
*/
console.log("\nsubstring() ->");
var str = "Hermione";
console.log(str.substring(1,2));


// substr() : doesnt modify string. start and how many chars;
console.log("\nsubstr() ->");
console.log(str.substr(1,2));


console.log("\ncharAt() ->");
console.log(str.charAt(0));


// STRING REPLACEMENTS
console.log("\nreplace() ->");

var orig = "GRASS is green";
console.log("original : " + orig);
console.log("grass is replaced with spinach : " + orig.replace(/grass/i, "SPINACH") );
console.log("orig is unchanges " + orig);

console.log("\n\n");
var mult = "rain RAIN go away";
console.log(mult.replace(/rain/g, "drizzle"));

console.log("\n\n");
var mult = "rain RAIN go away";
console.log(mult.replace(/rain/gi, function (str) { return str.toUpperCase(); }));

console.log("\n\n");
var mult = "rain RAIN go away";
console.log(mult.replace(/rain|go/gi, "boohoo"));


// NOTE :: s+ works better than s, because it replaces multiple spaces with one space
console.log("\n\n");
var mult = "rain RAIN   go away";
console.log(mult.replace(/\s+/g, ""));
