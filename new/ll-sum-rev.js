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
var list2 = new SLL();
var list3 = new SLL();

list1.insert(5);list1.insert(3);list1.insert(6);
list2.insert(6);list2.insert(4);list2.insert(4);list2.insert(4);

list1.traverse();
list2.traverse();
console.log('------------\n');

function addListPrep (list1, list2) {
    var list1Len = list1.length();
    var list2Len = list2.length();

    if (list1Len > list2Len) {
        list2.padList(list1Len - list2Len);
    } else {
        list1.padList(list2Len - list1Len);
    }
}


addListPrep(list1, list2);
list1.traverse();
list2.traverse();
console.log('------------\n');

function addList(list1, list2, list3, carry) {
    if (list1 == null && list2 == null) {
        return 0;
    }

    var sum = 0;
    var partialSum = 0;
    var carry;
    var valueToStore;

    if (list1) {
        partialSum += list1.data;
    }

    if (list2) {
        partialSum += list2.data;
    }

    carry = addList(list1 ? list1.next : null, list2 ? list2.next : null, list3, carry);

    sum = partialSum + carry;
    carry = sum > 10 ? 1 : 0;
    valueToStore = sum % 10;
    list3.prepend(valueToStore);
    return carry;
}

addList(list1.head, list2.head, list3, 0);
list3.traverse();