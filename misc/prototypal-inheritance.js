// http://javascript.info/tutorial/inheritance
// http://www.htmlgoodies.com/html5/tutorials/javascript-prototypical-inheritance-explained.html#fbid=U7Gkqc7TsvY

// what is a prototype
// A prototype is an internal object from which other objects inherit properties.
// Its main purpose is to allow multiple instances of an object to share a common property.

// the way __proto__ works is when we do say golf.wheels - then the interpreter looks at golf's
// own properties, when it doesnt find it, it looks up the protoype chain

var car = {
    wheels : 4,
    doors  : function (num) {
        this.doors = num;
    }
}

// using __proto__ : only works on ff and chrome
console.log('using __proto__ ----------------------------');
var golf = {
    color: "blue"
}
golf.__proto__ = car;
console.log(golf.wheels);
golf.doors(2)
console.log(golf.doors);





console.log('\nusing Object.create ----------------------------');
var camry = Object.create(car);
camry.color = "red";
camry.doors(5);
console.log(camry);
console.log('hasOwnProperty color : ' + camry.hasOwnProperty("color"));
console.log('hasOwnProperty doors : ' + camry.hasOwnProperty("doors"));
console.log('hasOwnProperty wheels : ' + camry.hasOwnProperty("wheels"));

console.log('getPrototypeOf camry is car : ' + (Object.getPrototypeOf(camry) === car));





console.log('\nwriting our own Object.create/inherit----------------------------');

function inherit (o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var jetta = inherit(car);

jetta.doors(2);
console.log(jetta);





console.log('\nusing function prototype ----------------------------');

function Passat() {
    this.color = "green";
}

Passat.prototype = car;

var passat = new Passat();

passat.doors(3);
console.log(passat.color);
console.log(passat.wheels);


// REMEMBER for.. in loops throuh own and parent properties
console.log('\nREMEMBER for.. in loops throuh own and parent properties');
for(var p in passat) {
    console.log(p + ' own property : ' + passat.hasOwnProperty(p));
}

console.log("------------------------------------------------------");


// TRICKY EXAMPLE: if an object is created before the protoype is assigned to a function,
//                 then that object will not have access to the properties in the protoype

console.log('\nTRICKY EXAMPLE : if an object is created before the protoype is assigned to a function');
console.log("then that object will not have access to the properties in the protoype\n");
function EOS() {
    this.color= "beige";
}

var eos = new EOS();

EOS.prototype = car;

console.log('eos.wheels ===  ' + eos.wheels);
