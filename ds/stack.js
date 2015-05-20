function Stack (maxStackSize) {
    this._top           = null;
    this._size          = 0;
    this._maxStackSize  = maxStackSize || 3;
}

Stack.prototype = {
    // push items to the top of the stack
    push: function (value) {
        var node = {
            data: value,
            below: null
        };

        if (this._size > this._maxStackSize - 1) {
            return "stack overflow";
        }

        if (this._top) {
            node.below = this._top;
        }

        this._top = node;
        this._size++;

        return value + " : added to the stack";
    },

    // removes a node from the top
    pop: function () {
        var out = this._top;

        if (!out) {
            return "stack underflow";
        }

        this._top = out.below;
        this._size--;
        return out.data + " : removed to the queue";
    },

    // returns the top of the stack
    peek: function () {
        if (!this._top) {
            return "stack underflow";
        }

        return this._top.data;
    },

    // builds a string of all the items in the stack
    traverse: function () {
        var top = this._top;
        var str = "";

        if (!top) {
            return "empty stack";
        }

        while(top) {
            str = str + top.data + " ";
            top = top.below;
        }

        return str;
    }
}


var maxStackSize = 2;
var stack        = new Stack(maxStackSize);

console.log("INIT STACK WITH MAX SIZE " + maxStackSize + "\n");

console.log("-------- Function : push ----------");
console.log(stack.push("hello"));
console.log(stack.push("world"));
console.log(stack.push("hi"));

console.log("\n-------- Function : traverse ----------");
console.log(stack.traverse());


console.log("\n-------- Function : peek ----------");
console.log(stack.peek());


console.log("\n-------- Function : pop ----------");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
