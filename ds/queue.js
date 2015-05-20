function Queue (maxQSize) {
    this._front     = null;
    this._rear      = null;
    this._size      = 0;
    this._maxQSize  = maxQSize || 3;
}


Queue.prototype = {
    enqueue: function (value) {
        var node = {
            data: value,
            next: null
        };

        if (this._size > this._maxQSize -1) {
            return "queue full";
        }

        if(!this._top) {
            this._top   = node;
            this._rear  = node;
        }

        this._rear.next = node;
        this._rear = node;
        this._size++;

        return value + " : added to the queue";
    },

    dequeue: function () {
        var out = this._top;

        if (!out) {
            return "queue empty";
        }

        this._top = out.next;
        this._size--;
        return out.data + " : removed from the queue";
    },

    traverse: function () {
        var top = this._top;
        var str = "";

        if (!top) {
            return "queue empty";
        }

        while(top) {
            str = str + top.data + " ";
            top = top.next;
        }

        return str;
    }
}

var maxQSize = 2;
var queue    = new Queue(maxQSize);

console.log("INIT QUEUE WITH MAX SIZE " + maxQSize + "\n");

console.log("-------- Function : enqueue ----------");
console.log(queue.enqueue("hello"));
console.log(queue.enqueue("world"));
console.log(queue.enqueue("hi"));

console.log("\n-------- Function : traverse ----------");
console.log(queue.traverse());


console.log("\n-------- Function : dequeue ----------");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
