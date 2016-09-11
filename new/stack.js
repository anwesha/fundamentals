function Stack() {
    this.top = null;
    this.size = 0;
}

Stack.prototype = {
    push: function(data) {
        var node = {
            data: data,
            next: null
        };

        if (this.top == null) {
            this.top = node;
            this.size++;
            return;
        }

        node.next = this.top;
        this.top = node;
        this.size++;
    },

    pop: function() {
        if (this.isEmpty()) {
            return null;
        }

        var temp = this.top.data;
        this.top = this.top.next;
        this.size--;
        return temp;
    },

    peek: function() {
        if (this.isEmpty()) {
            return;
        }

        return this.top.data;
    },

    isEmpty: function() {
        return this.size <= 0;
    }
};

module.exports = Stack;