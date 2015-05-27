/*
QUESTION :
How would you design a stack which, in addition to push and pop,
also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.
*/

// METHOD1 : store in every node what it thinks the min for all the nodes below it
// NOTES : problem is if the stack is too long then we are taking so much extra space to store min

function stackWithMin (maxSize) {
    this._top     = null;
    this._size    = 0;
    this._maxSize = maxSize || 5;
}

stackWithMin.prototype = {
    push: function (value) {
        var node = {
            data: value,
            below: null,
            min: null
        };

        if (this._size === this._maxSize) {
            return "stack overflow";
        }

        if (!this._top) {
            node.min = value;
            this._top = node;
        } else {
            node.below = this._top;
            node.min   = Math.min(this._top.min, value);
            this._top  = node;
        }

        this._size++;
    },

    pop: function () {

        if (this._size === 0) {
            return "stack underflow";
        }

        var out = this._top;
        this._top = out.below;
        this._size--;
        return out.data;
    },

    peek: function () {
        if (this._size === 0) {
            return "stack underflow";
        }

        return this._top;
    },

    min: function () {
        if (this._size === 0) {
            return "stack underflow";
        }

        return this.peek().min;
    },

    printStack: function () {
        var cur = this._top;
        var str = "";

        if (this._size === 0) {
            return "stack underflow";
        }

        while(cur) {
            str += cur.data + " ";
            cur = cur.below;
        }

        return str;
    }
};


function testStack(stack) {
    [22, 2, 2, 245, 10].forEach(function(num) {
        stack.push(num);
    });

    console.log(stack.printStack());
    console.log('min is : ' + stack.min());

    console.log('\npopping stack: ' + stack.pop());
    console.log(stack.printStack());
    console.log('min is : ' + stack.min());

    console.log('\npopping stack: ' + stack.pop());
    console.log('\npopping stack: ' + stack.pop());
    console.log('\npopping stack: ' + stack.pop());
    console.log(stack.printStack());
    console.log('min is : ' + stack.min());


    console.log('\npopping stack: ' + stack.pop());
    console.log(stack.printStack());
    console.log('min is : ' + stack.min());
};


var stack = new stackWithMin();
testStack(stack);


console.log('\n\n=============================================');

// METHOD2 : store mins in another stack
// pro: if there are repeated mins, then we are saving space
// con: overhead of storing mins in stack nodes rather than just a facet
function minStack () {
    this._top = null;
}

minStack.prototype = {
    push: function (value) {

        var node = {
            min: value,
            below:null
        };

        if (value <= this.min()) {

            if (this._top) {
                node.below = this._top;
            }
            this._top = node;
        }
    },

    pop: function (value) {
        var top = this._top;

        if (top && top.min === value) {
            this._top = this._top.below;
        }
    },

    peek: function () {
        return this._top.min;
    },

    min: function () {
        if(this._top === null) {
            return 1000000000000000;
        } else {
            return this._top.min;
        }
    },

    printStack: function () {
        var cur = this._top;
        var str = "";

        if (this._size === 0) {
            return "stack underflow";
        }

        while(cur) {
            str += cur.min + " ";
            cur = cur.below;
        }

        return str;
    }
}

function stackWithMin2 (maxSize) {
    this._top = null;
    this._minStack = new minStack();
    this._size = 0;
    this._maxSize = maxSize || 5;
}

stackWithMin2.prototype = {
    push: function (value) {
        var node = {
            data: value,
            below: null
        };

        if (this._top) {
            node.below = this._top;
        }
        this._minStack.push(value);
        this._top = node;
        this._size++;
    },

    pop: function () {
        var out = this._top;
        this._top = this._top.below;
        this._minStack.pop(out.data);
        this._size--;
        return out.data;
    },

    min: function () {
        if (this._size === 0) {
            return "stack underflow";
        }

        return this._minStack.peek();
    },

    printStack: function () {
        var cur = this._top;
        var str = "";

        if (this._size === 0) {
            return "stack underflow";
        }

        while(cur) {
            str += cur.data + " ";
            cur = cur.below;
        }
        //console.log(this._minStack.printStack());
        return str;
    }
}

var stack2 = new stackWithMin2();
testStack(stack2);
