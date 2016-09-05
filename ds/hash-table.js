// Hash table with an array
var hashTableWithObject = {
    table: {},
    put: function(key, value) {
        // if key already exists return the value
        if (this.table[key]) {
            console.log("collision!");
            return this.table[key];
        } else {
            this.table[key] = value;
        }
    },

    get: function (key) {
        return this.table[key] || 'not found';
    },

    each: function () {
        for(var key in this.table) {
            console.log(key + " : " + this.table[key]);
        }
    }
};

var htObj = Object.create(hashTableWithObject);

htObj.put("apple", "is a fruit, red in color");
htObj.put("orange", "is orange in color");
htObj.put("dog", "is an animal");
htObj.put("dog", "is an animal");

console.log(htObj.get("dog"));

htObj.each();


var hashTableWithArray = {
    table: [],
    max: 1000,
    generateIndexForKey: function (key) {
        var hash = 0;
        for(var i=0; i<key.length; i++){
            hash += (key[i].charCodeAt(0) - 'a'.charCodeAt(0));
        }

        return hash;
    },

    put: function (key, value) {
        var index = this.generateIndexForKey(key);

        if (this.table[index]) {
            this.table[index][key] = value;
        }else {
            this.table[index] = {};
            this.table[index][key] = value;
        }
    },

    get: function (key) {
        var index = this.generateIndexForKey(key);
        return (this.table[index] && this.table[index][key]) || 'not found';
    },

    each: function () {
        this.table.forEach(function (obj) {
            console.log(obj);
        })
    }
}

var htObj2 = Object.create(hashTableWithArray);

console.log('----------------\n');

htObj2.put("apple", "is a fruit, red in color");
htObj2.put("orange", "is orange in color");
htObj2.put("dog", "is an animal");
htObj2.put("god", "is there everywhere");

console.log("trying to find desc of god : " + htObj2.get("god") + '\n');

htObj2.each();
