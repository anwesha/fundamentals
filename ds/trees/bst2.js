var BinaryST = function (){
	this._root = null;
};

BinaryST.prototype = {
	add: function (value) {
		var _insert = function (node, value) {
			var newNode = {
				data: value,
				left: null,
				right:null
			};
			var dir;
			if (node === null) {
				this._root = newNode;
			} else {
				dir = value < node.data ? 'left' : 'right';
				if (node[dir]) {
					_insert(node[dir], value);
				} else {
					node[dir] = newNode;
				}
			}
		}.bind(this);

		_insert(this._root, value);
	},

	traverse: function (type) {
		type = type || 'inorder';
		var arr = [];

		var inorder = function (node) {

			if (!node) {
				return;
			}

			if (node.left) {
				inorder(node.left);
			}

			arr.push(node.data);

			if (node.right) {
				inorder(node.right);
			}
		};

		inorder(this._root);
		console.log(arr);
	},

	maxDepth: function () {
		var _maxDepth = function (node) {

			if (!node) {
				return 0;
			}

			var lDepth = _maxDepth(node.left);
			var rDepth = _maxDepth(node.right);

			return (Math.max(lDepth, rDepth) + 1);
		};

		console.log('max depth : ' + _maxDepth(this._root));
	},

	size: function () {
		var _size = function (node) {
			if (!node) {
				return 0;
			}

			return ( (_size(node.left)) + 1 + (_size(node.right)) );
		}

		console.log('size of bst is : ' + _size(this._root));
	},

	getMin: function () {
		var _min = function (node) {
			if (node === null) {
				return {data: "empty bst"};
			} else if (node.left === null) {
				return node;
			} else {
				return _min(node.left);
			}
		}

		console.log('min value is : ' + _min(this._root).data);
	},

	getMax: function () {
		var _max = function (node) {
			if (node === null) {
				return {data: "empty bst"};
			} else if (node.right === null) {
				return node;
			} else {
				return _max(node.right);
			}
		}

		console.log('max value is : ' + _max(this._root).data);
	},

	getSecondMax: function () {
		// todo
	}

};

var BinaryST = new BinaryST();

BinaryST.add(4);
BinaryST.add(2);
BinaryST.add(5);
BinaryST.add(1);
BinaryST.add(3);
BinaryST.traverse();
BinaryST.maxDepth();
BinaryST.size();
BinaryST.getMin();
BinaryST.getMax();

BinaryST.getSecondMax();

