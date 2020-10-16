"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null; // cola
    }
    // add element at the end of the list
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    };
    // to add element at specified index
    ////////////////////// me he adelantado 
    // to display link list data in array
    DoublyLinkedList.prototype.printValue = function () {
        var output = [];
        var currentNode = this.head;
        while (currentNode) {
            output.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return output;
    };
    return DoublyLinkedList;
}());
exports["default"] = DoublyLinkedList;
