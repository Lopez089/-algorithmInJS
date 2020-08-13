"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this._items = [];
        if (items.length > 0) {
            items.forEach(function (item) {
                _this._items.push(item);
            });
        }
    }
    Stack.prototype.push = function (items) {
        // push item to the stack
        //  empujar varios elemento a la pila
        // items.forEach((item: number) =>{
        // 	this._items.push(item);
        //   });
        return this._items;
    };
    Stack.prototype.pop = function () {
        // saca el elemento superior (último elemento) de stack
        return this._items.pop();
    };
    Stack.prototype.peek = function () {
        // mira cuál es el último elemento en pila
        return this._items[this._items.length - 1];
    };
    Stack.prototype.size = function () {
        // no. de elementos en la pila
        return this._items.length;
    };
    Stack.prototype.isEmpty = function () {
        // devuelve si la pila está vacía o no
        return this._items.length === 0;
    };
    return Stack;
}());
exports["default"] = Stack;
