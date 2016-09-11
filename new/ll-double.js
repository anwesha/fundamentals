function DLL() {
    this.head = null;
}

DLL.prototype = {
    insert: function(data) {
        var node = {
            data: data,
            next: null,
            prev: null
        };

        if (this.head == null) {
            this.head = node;
            return;
        }

        var cur = this.head;
        while(cur.next != null) {
            cur = cur.next;
        }

        node.prev = cur;
        cur.next = node;
    },

    traverse: function() {
        if (!this.head) {
            console.log('empty list');
            return;
        }

        var cur = this.head;
        var str = '';
        while(cur != null) {
            str += cur.data + ' ';
            cur = cur.next;
        }

        console.log(str);
    },

    remove: function(data) {
        if (!this.head) {
            console.log('empty list');
            return;
        }


        if (this.head.data == data) {
            this.head = this.head.next;
            this.head.prev = null;
            this.traverse();
            return;
        }

        var cur = this.head;
        var found = false;

        while (cur !=null && !found) {
            if (cur.data == data) {
                found = true;
            } else {
                cur = cur.next;
            }
        }

        if (found) {
            if (!cur.next) {
                // last item
                cur.prev.next = null;
            } else {
                cur.prev.next = cur.next;
                cur.next.prev = cur.prev;
            }

            this.traverse();
            return;
        } else {
            console.log('not found');
        }
    }
}


var dll = new DLL();
dll.insert(1);
dll.insert(2);
dll.insert(3);
dll.insert(4);
dll.insert(5);

dll.traverse();

dll.remove(1);
dll.remove(5);
dll.remove(3);

