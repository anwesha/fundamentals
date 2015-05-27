// CONSTUCTOR PATTERN

// LINKS : http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

// IN Javascript we are concerned about creating object constructors. constructor
// pattern is used to be able to create multiple objects with similar properties

// EXAMPLE 1 : has some disadvantages

function Car(make, year, color) {
    this.make = make;
    this.year = year;
    this.color = color;

    this.getCarDesc = function () {
        return ' Car is a ' + this.year + " " + this.make + " " + this.color + " in color";
    }
}

var golf = new Car("golf", "2013", "blue");
var camry = new Car("camry", "2010", "red");

console.log(golf.getCarDesc());
console.log(camry.getCarDesc());

// PROBLEM :
// 1: makes inheritance difficult;
// 2: with above code is that, for each invocation of Car(); the function
//    getCarDesc gets redifined, which is not optimal. it should be shared b/w instances



function Car2(make, year, color) {
    this.make = make;
    this.year = year;
    this.color = color;
}

Car2.prototype.getCarDesc = function () {
    return ' Car is a ' + this.year + " " + this.make + " " + this.color + " in color";
};

console.log('\n\n');

var golf = new Car2("golf", "2013", "blue");
var camry = new Car2("camry", "2010", "red");

console.log(golf.getCarDesc());
console.log(camry.getCarDesc());
