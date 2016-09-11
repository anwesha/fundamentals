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

    prepend: function (data) {
        var node = {
            data: data,
            next: null
        };

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    },

    length: function() {
        var count = 0;
        var cur = this.head;
        while (cur != null) {
            count += 1;
            cur = cur.next;
        }

        return count;
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
    },

    padList: function (howMany) {
        for (var i=0; i<howMany; i++) {
            this.prepend(0);
        }
    }
}

var list1 = new SLL();
list1.insert(5);list1.insert(3);list1.insert(6);list1.insert(56);

var getNode =  function(data) {
    return {
        data: data,
        next: null
    };
};

var reverse =  function (list) {
    var cur = list.head;
    var reversedlist = new SLL();
    var node;

    while (cur != null) {
        node = getNode(cur.data);
        node.next = reversedlist.head;
        reversedlist.head = node;

        cur = cur.next;
    }

    reversedlist.traverse();
};

reverse(list1);


// inplace revesal9