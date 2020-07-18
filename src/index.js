var Stack = /** @class */ (function () {
    function Stack() {
        this._items = [];
    }
    Stack.prototype.push = function (item) {
        // push item to the stack
        return this._items.push(item);
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
