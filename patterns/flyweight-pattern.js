/*
In short used for large data sets where considerable amount of data can be shared

http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailflyweight
http://www.dofactory.com/javascript/flyweight-design-pattern
*/

(function () {

    var Flyweight = function (info) {
        this.make = info.make;
        this.model = info.model;
        this.processor = info.processor;
    };

    var FlyweightFactory = (function () {
        var _flyWeights = {};

        var _getFlyWeight = function (info) {
            var key = info.make+info.model;
            if (!_flyWeights[key]) {
                _flyWeights[key] = new Flyweight(info);
            };

            return _flyWeights[key];
        };

        return {
            getFlyWeight: _getFlyWeight
        };
    })();

    var Computer = function (info) {
        this.common = FlyweightFactory.getFlyWeight(info);
        this.tag = info.tag;
        this.color = info.color;
    };

    Computer.prototype = {
        getInfo: function () {
            var info = {
                "make" : this.common.make + " " + this.common.model,
                "tag" : this.tag,
                "color": this.color
            };
            return info;
        }
    };

    var ComputerSet = function () {
        this.computerSet = {};
    };

    ComputerSet.prototype = {
        add: function (info) {
            this.computerSet[info.tag] = new Computer(info);
        },

        getComputer: function (tag) {
            return this.computerSet[tag];
        },

        getAllComputers: function () {
            for (var key in this.computerSet) {
                console.log(this.computerSet[key].getInfo());
            }
        }
    };

    var compset = new ComputerSet();

    var c1 = {
        make: "Apple",
        model: "Pro",
        processor: "Intel",
        color: "Steel",
        tag: "A1"
    };

    var c2 = {
        make: "Apple",
        model: "Pro",
        processor: "Intel",
        color: "Gold",
        tag: "A2"
    };

    var c3 = {
        make: "Dell",
        model: "Inspiron",
        processor: "Intel",
        color: "Red",
        tag: "D1"
    };

    compset.add(c1); compset.add(c2); compset.add(c3);
    console.log(compset.getComputer("A1"));

    console.log('\n\n');
    compset.getAllComputers();

})();
