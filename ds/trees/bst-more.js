// TASKS FOR BST

var bstProto = {
	root: null
};

// - insertion
bstProto.insert = function (value) {
	var _insert = function (node, value) {
		var newNode = {
			data:value,
			left:null,
			right:null
		};

		var dir;
		if (node === null) {
			this.root = newNode;
		} else {
			dir = value < node.data ? 'left' : 'right';
			if (node[dir]) {
				_insert(node[dir], value);
			} else {
				node[dir] = newNode;
			}
		}
	}.bind(this);

	_insert(this.root, value);
};


// traverse 
bstProto.traverse = function () {
	var arr = [];
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

	inorder(this.root, arr);
	console.log(arr);
};

// - search
bstProto.search = function (value) {
	var _search = function (node, value) {
		var dir;
		if (value === node.data) {
			return 'found';
		} else {
			dir = value < node.data ? 'left' : 'right';

			if (node[dir]) {
				return _search(node[dir], value);
			} else {
				return 'not found';
			}
		}
	};

	console.log(value + " : " + _search(this.root, value));
};

// - findMax
bstProto.findMax = function () {
	var _max = function(node) {
		if (node.right) {
			return _max(node.right);
		} else {
			return node.data;
		}
	};

	if (!this.root) {
		console.log('empty tree');
		return;
	}

	console.log('max node is : ' + _max(this.root));
};


// - findMin
bstProto.findMin = function() {
	var _min = function (node) {
		if (node.left) {
			return _min(node.left);
		} else {
			return node.data;
		}
	};

	if (!this.root) {
		console.log('empty bst');
		return;
	}

	console.log('min node is : ' + _min(this.root));
};

// - size
bstProto.size = function () {
	var _size = function (node) {

		if (!node) {
			return 0;
		}

		return _size(node.left) + 1 + _size(node.right);
	};

	console.log('total number of nodes in tree : ' + _size(this.root));
};

// - height
bstProto.height = function () {
	var _height = function (node) {

		if (!node) {
			return 0;
		}

		var leftH = _height(node.left);
		var rightH = _height(node.right);

		return Math.max(leftH, rightH) + 1;
	};

	console.log('height of the tree is : ' + _height(this.root));
};

// - secondLastMax
bstProto.secondLastMax = function () {
	var prev;
	var node = this.root;
	var max2nd = this.root && this.root.data || 'empty bst';
	var cur;

	while(node.right) {
		prev = node;
		node = node.right;
	}

	// node is rightmoest node now
	if (node.left) {
		// then the largest element is the right most node in its left subtree
		cur = node.left;
		while (cur.right) {
			cur = cur.right;
		}

		max2nd = cur.data;
	} else {
		// else parent of the current node is the 2ns max element
		max2nd = prev.data;
	}

	console.log('second largest element is : ' +  max2nd);
};


// - Delete node
bstProto.remove = function (value) {
	var cur    = this.root;
	var parent = null;
	var dir;
	var replacementNodeDir;
	var replacementNode;
	var nodeToDel;

	// Find the node
	while(cur) {
		if (cur.data === value) {
			break;
		} else {
			dir = value < cur.data ? 'left' : 'right';

			if (cur[dir])
			{
				parent = cur;
				cur = cur[dir];
			}
		}
	}

	if (!cur) {
		console.log('node to delete not found');
		return;
	}

	var children = (cur.left ? 1 : 0) + (cur.right ? 1 : 0);

	switch(children) {
		case 0: // just delete that node
			if (!parent) {
				// means root node
				this.root = null;
			} else {
				// dir should hold which child cur is of parent;
				parent[dir] = null;
			}

			break;

		case 1: // replace node's value with that of child
			replacementNodeDir = cur.right ? 'right' : 'left';
			replacementNode = cur[replacementNodeDir];
			cur.data = cur[replacementNodeDir].data;
			cur[replacementNodeDir] = null;
			delete replacementNode;

			break;
		case 2: // this is the tricky part

			// find the highest value in left subtree
			// OR find the lowest value in right subtree
			// then replace cur with that node's value and then delete that node

			// lets find highest value in left substree and its parent
			nodeToDel = cur;
			cur = cur.left;
			parent = null;
			while(cur.right) {
				parent = cur;
				cur = cur.right;
			}

			nodeToDel.data = cur.data;

			if (cur.left) {
				// if the cur node has a left element preserve that
				cur.data = cur.left.data;
				cur.left = null;
			} else  {

				if (parent) {
					// means we got into the while loop atlease once
					console.log(parent);
					parent.right = null;
				} else {
					// means left child of nodeToDelete has no children
					nodeToDel.left = null;
				}
			}

			break;
	}

};

var bst = Object.create(bstProto);

bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(0);
bst.insert(5);
bst.insert(7);
bst.insert(6);
bst.insert(10);
bst.insert(8);
	
bst.traverse();

bst.search(4);
bst.search(11);

bst.findMax();
bst.findMin();
bst.size();
bst.height();
bst.secondLastMax();

console.log('\n\n');

bst.remove(2)
console.log('\nafter deleting 2 (node with no child) :');
bst.traverse();

bst.remove(1)
console.log('\nafter deleting 1 (node with one child) :');
bst.traverse();


bst.remove(7)
console.log('\nafter deleting 7 (node with two children) :');
bst.traverse();


bst.remove(4)
console.log('\nafter deleting 4 (root) :');
bst.traverse();