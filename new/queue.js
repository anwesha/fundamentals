function Queue() {
    this.front = null;
    this.back = null;
    this.size = 0;

    // add to back
    // remove from front
}

Queue.prototype = {
    constructor: Queue,

    create: function(data) {
        return {
            data:data,
            next: null,
            prev: null
        };
    },

    add: function (data) {
        var node = this.create(data);

        // first node
        if(this.front == null) {
            this.front = node;
        }

        // add new item to back
        if (this.back) {
            node.prev = this.back;
            this.back.next = node;
        }

        this.back = node;

        this.size++;
    },

    remove: function () {
        if (this.isEmpty()) {
            console.log('q empty');
            return;
        }

        // remove from front
        var temp = this.front;
        if (this.front.next) {
            this.front.next.prev = null;
            this.front = this.front.next;
        } else {
            // only one node
            this.front = this.back = null;
        }

        this.size--;

        return temp.data;
    },

    isEmpty: function() {
        return this.size <=0;
    },

    traverse: function() {
        if (this.isEmpty()) {
            console.log('q empty');
            return;
        }
        var cur = this.front;
        var s = '';

        while(cur) {
            s += cur.data + ' ';
            cur = cur.next;
        }

        console.log(s);
    }
}

/*
var q = new Queue();
q.add(10);q.add(20);q.add(30);
q.traverse();


q.remove();
q.traverse();

q.remove();q.remove();
q.traverse();
*/

module.exports = Queue;