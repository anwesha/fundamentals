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
            str += cur.data + ' ';
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


var sll = new SLL();
sll.insert(1);
sll.insert(2);
sll.insert(2);
sll.insert(3);
sll.insert(1);
sll.insert(4);
sll.insert(1);
sll.traverse();

/*
function removeDupes() {
    var hashmap = {};
    var cur = prev = sll.head;

    if (!cur.next) {
        console.log('only on item');
        return;
    }

    while(cur != null) {
        if (hashmap[cur.data]) {
            prev.next = cur.next;
        } else {
            hashmap[cur.data] = 1;
            prev = cur;
        }
        cur = cur.next;
    }

    sll.traverse();
}


function removeDupes() {
    var cur = runner = sll.head;

    if (!cur.next) {
        console.log('only on item');
        return;
    }

    while(cur != null) {
        runner = cur;
        while(runner.next != null) {
            if (runner.next.data == cur.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }

        cur = cur.next;
    }

    sll.traverse();
}

removeDupes();
*/


// Find the Middle Node
/*
SLL.prototype.findMid = function() {
    var slow = fast = this.head;

    if (fast == null) {
        console.log('empty');
        return;
    }

    if (slow.next == null) {
        console.log(slow.data);
        return;
    }

    while(fast && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(slow.data);
}

sll.findMid();
*/


// Kth to last

function kthToLast(k) {
    var slow = sll.head;
    var fast = sll.head;

    for (var i=0;i<k; i++) {
        if (!fast) {
            console.log('out of bounds');
            return;
        }
        fast = fast.next;
    }

    while(fast != null) {
        slow = slow.next;
        fast = fast.next;
    }

    console.log(slow.data);
}

kthToLast(5);