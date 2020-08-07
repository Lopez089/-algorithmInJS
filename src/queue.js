"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
        this.rear = 0;
        this.size = 10;
    }
    Queue.prototype.enqueue = function (element) {
        if (this.rear < this.size) {
            this.data[this.rear] = element;
            this.rear = this.rear + 1;
        }
        else {
            console.log('limit size 10');
        }
    };
    Queue.prototype.length = function () {
        return this.rear;
    };
    Queue.prototype.isEmpty = function () {
        return this.rear === 0;
    };
    Queue.prototype.getFront = function () {
        if (this.isEmpty() === false) {
            return this.data[0];
        }
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty() === false) {
            this.rear = this.rear - 1;
            return this.data.shift();
        }
    };
    Queue.prototype.print = function () {
        this.data.map(function (element) {
            console.log(element);
        });
    };
    Queue.prototype.clear = function () {
        this.data.length = 0;
        this.rear = 0;
    };
    return Queue;
}());
exports["default"] = Queue;
