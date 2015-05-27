// LINKS
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

/*
DEFINITION:
The Module pattern was originally defined as a way to provide both private and public encapsulation
for classes in conventional software engineering.

In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that
we're able to include both public/private methods and variables inside a single object,
thus shielding particular parts from the global scope.

What this results in is a reduction in the likelihood of our function names
conflicting with other functions defined in additional scripts on the page.
*/

// MODULE pattern
// Advantages :
// - clean implementation
// - less clutter in global namespace
// - private vars and functions - more representative of the encapsulation

// Disadvantages
// - private functions are not accessible and not extensible

function MyModule () {
    var _privateVar = {};

    // `this` refers to the instance of `MyModule` when created

    // note that we still use a function declaration even when using a function expression.
    // for more information on why, check out: http://kangax.github.io/nfe/
    this.method1 = function method1 (something) {
        console.log(something || 'pass in something please');
    }
}

var myModuleObj = new MyModule();
console.log(myModuleObj._privateVar); // will be undefined
myModuleObj.method1("this is the module pattern");


// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
/*
ANONYMOUS CLOSURES :
the function is created and
everything within this function is self contained and maintains its own scope and state

notice the () around the function. its because by default in JS, everything starting
with function is considered a function declaration. by wrapping it in () we make it
a function expression
*/
(function () {
    // all functions and vars are accessible in this scope only
    // still can access global scope
}());

// EXAMPLE

var ModuleFabulous = (function (){
    var moduleFabulous = {};
    var privateVar;

    var privateFunc = function () {
        // only accessible within this scope
    };

    moduleFabulous.moduleProperty = "module property";
    moduleFabulous.moduleFunction = function moduleFunction() {
        return "this is the module function";
    }

    return moduleFabulous;
}());

console.log('\nanonymous closure pattern');
console.log('--------------------------');
console.log(ModuleFabulous.moduleProperty);
console.log(ModuleFabulous.moduleFunction());


// Revealing module pattern
var ShoppingBasket = (function () {
    var privateBasket = [];

    var publicAddItem = function (item) {
        privateBasket.push(item);
    };

    var publicTotalItem = function () {
        return privateBasket.length;
    };

    var publicPrintAllItems = function () {
        return "SHOPPING BASKET ITEMS : " + privateBasket.join(", ");
    }

    return {
        addItem: publicAddItem,
        getTotalNumberOfItems: publicTotalItem,
        printAllItems: publicPrintAllItems
    };
}());

console.log('\nrevealing module pattern');
ShoppingBasket.addItem("apples");
ShoppingBasket.addItem("oranges");

console.log('total number of items : ' + ShoppingBasket.getTotalNumberOfItems());
console.log(ShoppingBasket.printAllItems());
