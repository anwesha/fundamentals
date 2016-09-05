/*
Hoisting
is Javascript’s default behavior of moving all declarations to the top of it’s scope, script or function.
IMPORTANT : JS only hoists declarations and not initializations.

the use of "use strict;" // helps enforce that

Function hoisting is different;
JS will hoist function declarations BUT NOT function expressions

var h = hello(); // h = hello world because JS hoisted the function definition/declaration
function hello() { return "hellow world" };

BUT

funcVar(); // TypeError: undefined is not a function; this is because JS hoists var funcVar; above; so its undefined and we cant to undefined();
var funcVar = function () { return "hellow there"; }

now what happens if its a NAMED FUNCTION EXPRESSION

newFunc(); // ReferenceError; newFunc is not defined;
var funcVar = function newFunc() { return "hellow there"; }

http://adripofjavascript.com/blog/drips/variable-and-function-hoisting.html
*/

// EXAMPLE

function testHoisting() {
    x = 10;

    console.log(x); // x = 10; JS moves var x to the top;
    var x;

    console.log(y); // y = undefined because JS does not hoist initializations
    var y = 20;

    if (typeof innerFunc === 'function') {
        console.log(innerFunc());
    } else {
        console.log('innerFunc is not defined');
    }

    innerFunc = function() {
        z = 30;
        console.log('value of z is : ' + z); // this will be 30
        console.log("value of y is : " + y); // y = undefined because in innerFunc's scope y is defined
        var y;
    };

    innerFunc();

    var z;
}

function testHoisting2() {

    booHoo(); // this will work because JS hoists function definition/declaration
    try {
        actualFunc(); // This will throw ReferenceError because JS doesnt hoist named function expressions so actualFunc doesnt exist
    }catch(e) {
        console.log(e);
    }

    try {
        anotherFunc(); // This will throw TypeError because JS doesnt hoist function expressions. so undefined is not a func
    }catch(e) {
        console.log(e);
    }

    // NAMED FUNCTION EXPRESSION
    var varFunc = function actualFunc() {
        console.log("named functional exp");
    };

    // FUNCTION EXPRESSION
    var anotherFunc = function () {
        console.log('another func');
    };

    // FUNCTION DEFINITION
    function booHoo() {
        console.log("in boo hoo");
    }
}


testHoisting();
testHoisting2();


// EXAMPLES
console.log("\n\n EXAMPLES ::");

var ex1 = function () {
    var foo = 1;
    function bar() {
    	if (!foo) {
    		var foo = 10;
    	}
    	console.log(foo);
    }
    bar();
}();


var ex2 = function () {
    var a = 1;
    function b() {
    	a = 10;
    	return;
    	function a() {}
    }
    b();
    console.log(a);
}();


/*
Name Resolution Order

In general, if a name has already been defined, it is never overridden by another property of the same name.
This means that a function declaration takes priority over a variable declaration.
This does not mean that an assignment to that name will not work, just that the declaration portion will be ignored.
*/
var ex3 = function () {
    var a = 10;
    a = function () {
        return "booh";
    };


    console.log(a);// a will be function

    var b = function () {
        return "b func";
    };

    b = 20;
    console.log(b); // b will be 20;


    var c = 10;
    something = function () {
        c = function () {
            return "c as a function";
        };
        console.log(c());

    }();

    console.log("outside something function value of c is : " + c); // c will be overridden to be a func


    var d = 10;
    something2 = function () {
        d = function () {
            return "d as a function";
        };
        var d;

        console.log(d());
    }();

    console.log("outside something2 function value of d is : " + d); // 10
}();
