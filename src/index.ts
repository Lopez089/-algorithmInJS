class Stack {
  _items: string[];
  constructor() {
    this._items = [];
  }

  push(item: string) {
    // push item to the stack
    return this._items.push(item);
  }

  pop() {
    // saca el elemento superior (último elemento) de stack
    return this._items.pop();
  }

  peek() {
    // mira cuál es el último elemento en pila
    return this._items[this._items.length - 1];
  }

  size() {
    // no. de elementos en la pila
    return this._items.length;
  }

  isEmpty() {
    // devuelve si la pila está vacía o no
    return this._items.length === 0;
  }
}
