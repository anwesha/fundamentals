function SLL() {
    this.head = null;
}

SLL.prototype = {
    insert: function(data) {
        var node = {
            data: data,
            next: null
        };

        if (this.head == null) {
            this.head = node;
            return;
        }

        var cur = this.head;
        while(cur.next != null) {
            cur = cur.next;
        }

        cur.next = node;
    },

    traverse: function() {
        var str = '';
        var cur = this.head;

        if (cur == null) {
            console.log('empty list');
            return;
        }

        while(cur != null) {
            str += cur.data + '->';
            cur = cur.next;
        }

        console.log(str);
        return;
    },

    remove: function(data) {
        if (this.head == null) {
            console.log('empty');
            return;
        }


        if (data === this.head.data) {
            this.head = this.head.next;
            this.traverse();
            return;
        }

        var cur = prev = this.head;
        var found = false;
        while(cur != null && !found) {
            if (cur.data === data) {
                found = true;
            } else {
                prev = cur;
                cur = cur.next;
            }
        }

        if (found) {
            prev.next = cur.next ? cur.next : null;
            this.traverse();
            return;
        } else {
            console.log('not found');
            return;
        }
    }
}

/*
var sll = new SLL();
sll.insert(1);
sll.insert(2);
sll.insert(3);
sll.insert(4);

sll.traverse();
sll.remove(1);

sll.remove(3);
sll.remove(4);
sll.remove(5);
sll.remove(2);
*/

module.exports = SLL;