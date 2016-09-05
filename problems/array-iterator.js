// INPUT : [[2], [4], [], [5,6], [], [8,9]];
// REQUIREMENTS ::
// has_next() : should say true or false only if valid value, empty array is a falsey value
// next() : 2, 4, skip, 5, 6, skip
// remove() : u can only remove one item per array;
//             eg : If pointer is at 4 and we call remove() thats an error
//                  If then we do next() we come to 5 and then we can delete that


function Iterator(arr) {
    this.arr = arr;
    this.row = 0;
    this.col = 0;
    this.rowMax = arr.length;
};

Iterator.prototype = {
    has_next: function () {
        var withinRowBounds = this.row < this.rowMax;
        var item            = withinRowBounds && this.arr[this.row][this.col];
        return item ? true : false;
    },

    next: function () {

        var next;
        var _getNext = function () {
            var withinRowBounds = this.row < this.rowMax;
            if (!withinRowBounds) {
                next = "end of array";
                return;
            };

            var curRowArr = this.arr[this.row];

            if (curRowArr.length === 0 || (this.col >= curRowArr.length)) {
                this.row++;
                this.col = 0;
                _getNext();
            } else {
                next = this.arr[this.row][this.col];
                this.col++;
            }
        }.bind(this);

        _getNext();
        console.log(next);
    },

    remove: function () {
        var withinRowBounds = this.row < this.rowMax;

        if (withinRowBounds) {
            // only delete if this.arr[this.row].length > 1
            var shouldWeDelete = this.arr[this.row].length > 1;
            if (shouldWeDelete) {
                console.log(this.arr[this.row][this.col] + " removed");
                delete this.arr[this.row][this.col];
            } else {
                console.log("cannot delete please move pointer");
            }
        } else {
            console.log('nothing to delete');
        }
    }
};

var eg1 = [[2], [4], [], [5,6], [], [8,9]];
var it = new Iterator(eg1);

console.log('has next ->' + it.has_next());

it.remove();
it.next(); // 2
it.remove(); // cannot remove
it.next(); // 4
it.remove();
