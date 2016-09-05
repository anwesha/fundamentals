function doubleLinkedList() {
    this._head = null;
}

doubleLinkedList.prototype = {
    add: function (value) {
        var node = {
            data: value,
            prev: null,
            next: null
        };

        var cur = this._head;

        if (!cur) {
            this._head = node;
        } else {
            while(cur.next !== null) {
                cur = cur.next;
            }

            node.prev = cur;
            cur.next = node;
        }
    },

    remove: function (value) {
        var cur = this._head;
        var prev;
        var next;

        if (!cur) {
            return "empty double linked list";
        }

        while(cur) {
            prev = cur.prev;
            next = cur.next;
            if (cur.data === value) {
                if (prev) {
                    prev.next = next;
                } else {
                    this._head = next;
                }

                if (next) {
                    next.prev = prev;
                } else if (prev) {
                    prev.next = null;
                    this._tail = prev;
                }
            }
            cur = cur.next;
        }
    },

    traverse: function () {
        if (!this._head) {
            return "empty double linked list";
        }

        var cur = this._head;
        var str = "";

        while(cur) {
            str = str + cur.data + " ";
            cur = cur.next;
        }

        return str;
    }
}

var dll = new doubleLinkedList();

dll.add("one");
dll.add("two");
dll.add("three");

console.log(dll.traverse());

dll.remove("three");
console.log(dll.traverse());

dll.remove("one");
console.log(dll.traverse());

dll.remove("two");
console.log(dll.traverse());
