function Stack(maxSize) {
	this._top = -1;
	this._data = [];
	this._max = maxSize || 3; 
}

Stack.prototype = {
	push: function(elm) {
		
		if (this._top >= this._max - 1) {
			console.log('stack overflow');
			return;
		}
		
		var node = {
			value: elm,
			next: null
		};
		
		if (this._top !== -1) {
			node.next = this._data[this._top];
		}
		
		this._data[++this._top] = node;
	},
	pop: function() {
		if (this._top < 0) {
			console.log('stack underflow');
			return;
		}
		
		console.log(this._data[this._top].value);
		delete this._data[this._top--];
	},
	peek: function() {
		if (this._top < 0) {
			console.log('stack underflow');
			return;
		}
		
		console.log(this._data[this._top].value);
	},
	traverse: function() {
		var s = '';
		for(var i=this._data.length-1; i>=0; i--) {
			s += this._data[i].value + '->';
		}
		console.log(s);
	}
}

var s = new Stack();
s.peek();s.pop();
s.push(10);s.push(20);
s.pop();
s.push(1000);s.push(111);s.push(999);
s.traverse();
s.pop();s.pop();s.pop();s.pop();
