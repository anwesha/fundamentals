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


var list1 = new SLL();
var list2 = new SLL();
var list3 = new SLL();

list1.insert(7);list1.insert(1);list1.insert(2);
list2.insert(8);list2.insert(1);list2.insert(7);list2.insert(6);

list1.traverse();
list2.traverse();

function addLists(list1, list2, list3, carry) {
    if (list1 == null && list2 == null) {
        return;
    }

    var sum = 0;
    var valueToStore;

    if (list1) {
        sum += list1.data;
    }

    if (list2) {
        sum += list2.data;
    }

    sum += carry;
    carry = sum > 10 ? 1 : 0;
    valueToStore = sum % 10;

    list3.insert(valueToStore);
    addLists(list1 ? list1.next : null, list2 ? list2.next : null, list3, carry);
    //return;

}

addLists(list1.head, list2.head, list3, 0);
console.log('summed list');
list3.traverse();