Stack = require('./stack.js');
Queue = require('./queue.js')

// BST
// insert, search, delete
// findmax, findmin,
// inorder, preorder, postorder
// inorderIterative
// dfs (same as preorder )
// bfs
// bfs search
// dfs search
// isValidBST

function BST() {
    this.root = null;
}

BST.prototype = {
    constructor: BST,

    create: function(data) {
        return {
            data: data,
            left: null,
            right: null
        };
    },

    insert: function(data) {
        var node = this.create(data);

        // first node
        if (this.root == null) {
            this.root = node;
            return;
        }

        // else look for the right place
        // if data > cur.data -> go right else left
        var cur = this.root;

        while(cur != null) {
            if (data < cur.data) {
                if (cur.left) {
                    cur = cur.left;
                } else {
                    cur.left = node;
                    break;
                }
            } else if (data > cur.data) {
                if (cur.right) {
                    cur = cur.right;
                } else {
                    cur.right = node;
                    break;
                }
            }
        }
    },

    search: function(data) {
        if (this.isEmpty()) {
            console.log('empty');
            return;
        }

        var cur = this.root;
        var found = false;
        while(cur != null && !found) {
            if (cur.data == data) {
                found = true;
                break;
            } else if (data < cur.data) {
                cur = cur.left;
            } else if (data > cur.data) {
                cur = cur.right;
            }
        }

        console.log(found ? cur.data : 'not found');
    },

    findMax: function(node) {
        if (node == null) {
            return;
        }

        if (node.right == null) {
            return node.data;
        } else {
            return this.findMax(node.right);
        }
    },

    isEmpty: function () {
        return this.root == null;
    },

    inorder: function(node) {
        if (node == null) {
            return;
        }

        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    },

    inorderIterative: function() {
        if (this.root == null) {
            return;
        }

        var stack = new Stack();
        var n = this.root;
        stack.push(this.root);

        while(!stack.isEmpty()) {
            n = n && n.left;
            while(n != null) {
                stack.push(n);
                n = n.left;
            }

            if (!stack.isEmpty()) {
                n = stack.pop();
                console.log(n.data);
                n = n.right;
            }

            while(n != null) {
                stack.push(n);
                n = n.left;
            }
        }
    },

    remove: function(data) {
        if (this.isEmpty()) {
            console.log('empty');
            return;
        }

        // find the node
        var cur = this.root;
        var prev = this.root;
        var found = false;

        while(cur != null && !found) {
            if (cur.data == data) {
                found = true;
                break;
            } else if (data < cur.data) {
                prev = cur;
                cur = cur.left;
            } else if (data > cur.data) {
                prev = cur;
                cur = cur.right;
            }
        }

        if (!found) {
            console.log('nothing found to remove');
            return;
        }

        this.size--;
        var childcount = (cur.left ? 1 : 0) + (cur.right ? 1 : 0);

        switch(childcount) {
            case 0:
            if (cur == this.root) {
                this.root = null;
            } else {
                if (prev.right && prev.right == cur) {
                    prev.right = null;
                }

                if (prev.left && prev.left == cur) {
                    prev.left = null;
                }
            }
            break;
            case 1:
            if (cur == this.root) {
                if (this.root.left) {
                    this.root = this.root.left;
                }

                if (this.root.right) {
                    this.root = this.root.right;
                }
            } else {
                if (cur.left) {
                    cur.data = cur.left.data;
                    cur.left = null;
                }

                if (cur.right) {
                    cur.data = cur.right.data;
                    cur.right = null;
                }
            }
            break;
            case 2:
            // find the smallest value in the right substree
            // swap with the node to be deleted
            // delete the leaf node
            var replacementNode = cur.right;
            var replacementNodeParent = cur;

            while(replacementNode.left != null) {
                replacementNodeParent = replacementNode;
                replacementNode = replacementNode.left;
            }

            if (replacementNode) {
                cur.data = replacementNode.data;

                if (replacementNodeParent.left == replacementNode) {
                    replacementNodeParent.left = null;
                } else {
                    replacementNodeParent.right = null;
                }
            }
        }

    },

    dfsSearch: function(node, item) {
        if (node == null) {
            return false;
        }

        if (node.data == item) {
            return true;
        } else {
            return (this.dfsSearch(node.left, item) || this.dfsSearch(node.right, item));
        }
    },

    bfsSearch: function(node, item) {
        if (node == null) {
            console.log('empty');
            return;
        }

        var q = new Queue();
        var found = false;
        q.add(node);
        var node;

        while(!q.isEmpty()) {
            node = q.remove();
            if (node.data == item) {
                found = true;
                break;
            }

            if (node.left) {
                q.add(node.left);
            }

            if (node.right) {
                q.add(node.right);
            }
        }

        return found;
    },

    isValidBST: function() {
        if(!this.root) {
            console.log('empty');
            return;
        }

        isvalidbst = function(node, prevData) {
            if (node == null) {
                return true;
            }

            if (isvalidbst(node.left)) {
                if (node.data > prevData) {
                    prevData = node.data;
                    return isvalidbst(node.right, prevData);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };

        console.log(isvalidbst(this.root, Number.MIN_VALUE));
    }
}

var bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(7);
bst.insert(13);
bst.insert(12);
bst.insert(14);

//console.log('\ inorder traversal');
//bst.inorder(bst.root);

//console.log('searchin for 12');
//bst.search(12);


//console.log('searchin for 12 - dfs ' + bst.dfsSearch(bst.root, 12));
//console.log('searchin for 12 - bfs ' + bst.bfsSearch(bst.root, 12));

bst.isValidBST();

/*
console.log('\nfinding max');
console.log(bst.findMax(bst.root));

console.log('\n\ninorder iterative');
bst.inorderIterative();

console.log('\n\n');
bst.remove(1);

console.log('\n\n');
bst.remove(7);
bst.inorder(bst.root);

console.log('\n\n');
bst.insert(7);
bst.remove(8);
bst.inorder(bst.root);

console.log('\n\n');
bst.remove(13);
bst.inorder(bst.root);

console.log('\n\n');
bst.remove(10);
bst.inorder(bst.root);
*/

