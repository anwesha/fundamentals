function singleLinkedList () {
    this._head = null;
}

singleLinkedList.prototype = {
    add: function (value) {
        var node = {
            data: value,
            next: null
        };

        var current = this._head;

        if (!current) {
            this._head = node;
            return;
        }

        while (current.next !== null) {
            current = current.next;
        }

        current.next = node;
    },

    remove: function (value) {
        var current = this._head;
        var prev    = null;

        if(!current) {
            return "empty linked list";
        }

        while(current) {
            if(current.data === value) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this._head = this._head.next;
                }
            }

            prev = current;
            current = current.next;
        }
    },

    traverse: function () {
        var current = this._head;
        var str = "";

        if(!current) {
            return "empty linked list";
        }

        while(current) {
            str += current.data + " ";
            current = current.next;
        }

        return str;
    },

    reverse: function () {
        var next;
        var prev;

        while (this._head) {
            next = this._head.next;
            this._head.next = prev;

            prev = this._head;
            this._head = next;
        }

        this._head = prev;
    }
}


var sll = new singleLinkedList();


console.log("-------- Single Linked List ----------\n");
sll.add("big");
sll.add("blue");
sll.add("bus");

console.log(sll.traverse());

console.log("-------- Case1: delete middle node ----------\n");
sll.remove("blue")
console.log(sll.traverse());


console.log("-------- Case2: delete first node ----------\n");
sll.remove("big")
console.log(sll.traverse());

console.log("-------- Case2: delete last node ----------\n");
sll.remove("bus")
console.log(sll.traverse());


console.log("-------- Case2: reverse ----------\n");
sll.add("one");
sll.add("two");
sll.add("three");
console.log(sll.traverse());
console.log("\n\n");
sll.reverse();
console.log(sll.traverse());
