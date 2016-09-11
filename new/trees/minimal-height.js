// Minimal Height - means we need try to have as much nodes in left
// subtree as right subtree
var BST = require('./bst.js').BST;

function minimalHeight(arr, start, end) {
    if (end < start) {
        return null;
    }

    var mid = parseInt((start + end)/2);
    var node = {
        data: arr[mid],
        left: null,
        right: null
    };

    node.left = minimalHeight(arr, start, mid - 1);
    node.right = minimalHeight(arr, mid + 1, end);

    return node;
}

/*

     10
  8      13
7   9  12    14

height should be = 2

*/
var arrToTree = [7,8,9,10,13,12,14];
var treeRoot = minimalHeight(arrToTree, 0, (arrToTree.length - 1));

var bst = new BST();
bst.root = treeRoot;
bst.inorder(bst.root);

