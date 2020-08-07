class Stack {
	_items: number[];
	
	constructor(...items: number[] ) {
	  this._items = [];
  
	  if (items.length > 0) {
		items.forEach((item) => {
		  this._items.push(item);
		});
	  }
	}
  
	push(items: number[] | number) {
	  // push item to the stack
	  //  empujar varios elemento a la pila
		// items.forEach((item: number) =>{
		// 	this._items.push(item);
		//   });
	  
	  return this._items;
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

  export default Stack 