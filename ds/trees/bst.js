// Binary Search Tress

function BST() {
    this._root = null;
}

BST.prototype = {
    add: function (value) {
        var newNode = {
            data: value,
            left: null,
            right: null
        };

        var insert = function (node, value) {
            if (node === null) {
                this._root = newNode;
            } else if (value < node.data) {
                if (node.left) {
                    insert(node.left, value);
                } else {
                    node.left = newNode;;
                }
            } else if (value > node.data) {
                if(node.right) {
                    insert(node.right, value);
                } else {
                    node.right = newNode;
                }
            }
        }.bind(this);

        insert(this._root, value);
    },

    traverse: function (callback) {
        var inOrder = function (node, callback) {
            if (node === null) {
                return;
            }

            if (node.left !== null) {
                inOrder(node.left, callback);
            }

            callback(node);

            if(node.right !== null) {
                inOrder(node.right, callback);
            }
        }

        inOrder(this._root, callback);
    },

    size: function () {
        var length = 0;
        this.traverse(function (){
            length++;
        });
    },

    toArray: function () {
        var arr = [];
        this.traverse(function (node) {
            arr.push(node.data);
        });

        return arr;
    },

    toString: function () {
        return this.toArray().toString();
    },

    search: function (value) {
        var s = function (node, value) {
            if (node === null) {
                return 'not found';
            }

            if (node.data == value) {
                return node;
            } else if (value < node.data) {
                return s(node.left, value);
            } else if (value > node.data) {
                return s(node.right, value);
            }
        };

        return s(this._root, value);
    },

/*
    delete: function (value) {
        // Case 1: node has not children
        // Case 2: node has one child
        // Case 3 : node has two children
        //  find the smallest element in the right subtree
        //  OR find the largest element in the left subtree
        //  replace the node's value with the node we find above and then
        //  delete the dup node

        if (!this._root) {
            console.log("empty tree");
            return;
        }

        var cur    = this._root;
        var parent = null;
        var childCount = 0;


        // find the node
        while(cur !== null) {
            if (cur.data === value) {
                break;
            } else if (value < cur.data) {
                parent = cur;
                cur = cur.left;
            } else if (value > cur.data) {
                parent = cur;
                cur = cur.right;
            }
        }

        if (!cur) {
            console.log("node with value : " + value + " not found");
            return;
        }

        childCount = (cur.left ? 1 : 0) + (cur.right ? 1 : 0);
        switch (childCount) {
            case 0:
            if(cur.data > parent.data) {
                parent.right = null;
            } else {
                parent.left = null;
            }
            break;

            case 1:
            if (cur.left) {
                cur.data = cur.left.data;
                cur.left = null;
            } else if (cur.right) {
                cur.data = cur.right.data;
                cur.right = null;
            }
            break;

            case 2:
            var replacementNode   = cur.right;
            var replacementParent = null;

            // stop at second last node so we can save its parent
            // which we'll need to delete the leaf node
            while (replacementNode.left !== null) {
                replacementParent = replacementNode;
                replacementNode = replacementNode.left;
            }

            cur.data = replacementNode.data;

            if (replacementParent) {
                replacementParent.left = null;
            } else {
                // means replacementParent is cur
                cur.right = null;
            }

            break;

            default:
            break;
        }
    },*/

    delete: function (value) {
        // find the node
        var cur = this._root;
        var found = false;
        var parent;
        var numOfCh = 0;
        var dir;

        while (cur) {
            if (cur.data === value) {
                found = true;
                break;
            } else if (value < cur.data) {
                parent = cur;
                cur = cur.left;
            } else if (value > cur.data) {
                parent = cur;
                cur = cur.right;
            }
        }

        if (!found) {
            console.log( "nothing to delete");
            return;
        }

        // count how many children the node has
        numOfCh = (cur.left && 1) + (cur.right && 1);

        switch(numOfCh) {
            case 0: // just delete the node
            if (parent) {
                dir = value < parent.data ? "left" : "right";
                parent[dir] = null;
            } else {
                // cur was the root
                this._root = null;
            }
            break;

            case 1: // copy its child's data to the cur node and delete that child
            dir = cur.left ? "left" : "right";
            cur.data = cur[dir].data;
            cur[dir] = null;
            break;

            case 2: // this is the complicated one

            // we will either
            // - find the max of left subtree (right most node) OR
            // - find the min of right subtree (left most node)
            // and replace cur.data with that leaf.data and delete
            // the leaf node. so we need track the leafParent as well

            var leaf = cur.right;
            var leafParent;

            // go till second last so we can preserve
            // actual leaf's parent is conserved;
            while(leaf.left !== null) {
                leafParent = leaf;
                leaf = leaf.left;
            };

            cur.data = leaf.data;

            if (leaf.right) {
                leaf.data = leaf.right.data;
                leaf.right = null;
            } else if (leafParent) {
                leafParent.left = null;
            } else {
                // means cur is the leaf
                cur.right = null;
            }

            break;
        }
    },


    inOrderTraversal: function () {
        var arr = []
        var inorder = function (node, arr) {
            if (!node) {
                return;
            }

            if (node.left) {
                inorder(node.left, arr);
            }

            arr.push(node.data);

            if (node.right) {
                inorder(node.right, arr);
            }
        };

        inorder(this._root, arr);
        console.log("inorder traversal : " + arr);
    },

    preOrderTraversal: function () {
        var arr = [];
        var pre = function(node, arr) {
            if (!node) {
                return;
            }

            arr.push(node.data);

            if (node.left)  {
                pre(node.left, arr);
            }

            if (node.right) {
                pre(node.right, arr);
            }
        };

        pre(this._root, arr);
        console.log("preorder traversal : " + arr);
    },

    postOrderTraversal: function () {
        var arr = [];
        var post = function (node, arr) {
            if (!node) {
                return;
            }

            if (node.left)  {
                post(node.left, arr);
            }

            if (node.right) {
                post(node.right, arr);
            }

            arr.push(node.data);
        };

        post(this._root, arr);
        console.log("postorder traversal : " + arr);
    }
};


var bst = new BST();

bst.add(2);
bst.add(656);
bst.add(700);
bst.add(33);
bst.add(36);
bst.add(29);
bst.add(13);
bst.add(14);
bst.add(1);

//bst.inOrderTraversal();
//bst.preOrderTraversal();
//bst.postOrderTraversal();


console.log(bst.toArray());

console.log('\n\n deleting 2: root node');
bst.delete(2);
console.log(bst.toArray());

//console.log(bst.toString());

//console.log(bst.search(1));
//console.log(bst.search(11));

//console.log('\n\n deleting 29 : one child');
//bst.delete(29);
//console.log(bst.toArray());


//console.log('\n\n deleting 13: no child');
//bst.delete(13);
//console.log(bst.toArray());


//console.log('\n\n deleting 656: 2 children');
//bst.delete(656);
//console.log(bst.toArray());

/*
bst.add(750);
bst.add(730);
bst.add(760);
bst.add(753);
bst.add(751);
bst.add(754);
console.log('\n\n' + bst.toArray());


console.log('\n\n deleting 750: 2 children');
bst.delete(750);
console.log(bst.toArray());

var bst2 = new BST();
bst2.add(2);
bst2.add(1);
bst2.add(600);
bst2.add(500);
bst2.add(700);


console.log('\n\n deleting 2: root node');
bst2.delete(2);
console.log(bst2.toArray());
*/
