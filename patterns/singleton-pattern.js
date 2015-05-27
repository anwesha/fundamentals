// SINGLETON PATTERN
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript

// only one object of a certain function/class can exists
// MORE ELOQUENT :
// The Singleton pattern is thus known because it restricts instantiation of a class to a single object.

// Singleton differs from static classes or objects from the fact that its initilialization
// can be delayed, generally because they might require information which is not present immediately

var MySingleton = (function () {
    var _instance;

    function init() {
        var privateVar = "my singleton pattern  " + Math.random();

        return {
            getInfo: function () {
                return privateVar;
            }
        };
    };

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = init();
            }

            return _instance;
        }
    }
} ());

var singleObj = MySingleton.getInstance();

console.log(singleObj.getInfo());
console.log(singleObj.getInfo());


var MyBadSingleton = (function () {
    var instance;

    function init() {
        var privateVar = "bad singleton " + Math.random();

        return {
            getInfo: function () {
                return privateVar;
            }
        };
    };

    return {
        getInstance: function () {
            instance = init();
            return instance;
        }
    }

}());

var singleton1 = MyBadSingleton.getInstance();
var singleton2 = MyBadSingleton.getInstance();

console.log(singleton1.getInfo() + ' === ' + singleton2.getInfo() + " : " + (singleton1.getInfo() === singleton2.getInfo()));
