// Different ways to create an object in Javascript

// --------------------------------------------------
// METHOD 1
// --------------------------------------------------

var method1 = function () {
    function Book() {
        this.title   = "Doctors";
        this.author  = "Eric Segal";
        this.getInfo = function () {
            return this.title + " " + this.author;
        }
    }

    var newBook = new Book();
    newBook.title = "Class";
    console.log(newBook.getInfo());

    var newBook2 = new Book();
    console.log(newBook2.getInfo());
    console.log("\n");
}();


// --------------------------------------------------
// METHOD 2
// --------------------------------------------------

var method2 = function () {
    function Book() {
        this.title   = "Doctors";
        this.author  = "Eric Segal";
    }

    Book.prototype = {
        getInfo: function() {
            return this.title + " " + this.author;
        }
    }


    var newBook = new Book();
    newBook.title = "Class";
    console.log(newBook.getInfo());

    var newBook2 = new Book();
    console.log(newBook2.getInfo());
    console.log("\n");
}();


// --------------------------------------------------
// METHOD 3
// --------------------------------------------------

var method3 = function () {

    // For method sharing (flyweight objects),
    // Use a prototype. Start with Object.create:
    // (Douglas Crockford)
    // Object.create is supported >= 10
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    var proto = {
        title: "Doctors",
        author: "Eric Segal",
        getInfo: function() {
            return this.title + " " + this.author;
        }
    };

    var newBook = Object.create(proto);
    newBook.title = "Class";
    console.log(newBook.getInfo());

    var newBook2 = Object.create(proto);
    console.log(newBook2.getInfo());
}();


function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);
