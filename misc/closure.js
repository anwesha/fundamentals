// CLOSURE
/*
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain.
The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets),
it has access to the outer function's variables, and it has access to the global variables.
*/

// ---------------------------------------------------
// CLOSURE EXAMPLE 1
// --------------------------------------------------
var globalVar = 10;

var outerFunc = function () {
    var outerVar = 20;

    console.log('\nin the outer function');
    console.log(globalVar);
    console.log(outerVar);

    var innerFunc = function() {
        var innerVar = 30;
        console.log('\nin the innermost function');
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }();
}();


console.log('\n\n');


// --------------------------------------------------
// CLOSURE EXAMPLE 2
// --------------------------------------------------
var printName = function(first, last) {
    var prefix = "My name is ";

    var nameFunc = function () {
        console.log(prefix + first + " " + last);
    }();
}("anwesha", "deb");


// --------------------------------------------------
// EXAMPLE SHOWING : closures has access to outer
// functions variable even after they have returned
// --------------------------------------------------
function nameFunc(first) {
    var prefix = "My name is ";

    var lastName = function (last) {
        return prefix + first + " " + last;
    };

    return lastName;
}

var eg = nameFunc("anwesha");
console.log(eg("deb"));
