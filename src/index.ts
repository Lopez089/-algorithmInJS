import Stack from './services/stack'


// Instancia Stack //
const stack = new Stack(73, 89, 9322);

for (let i: number = 0; i < 2000; i++) {
  stack.push(i);
}

console.log(stack.peek());

stack.pop();
console.log(stack.peek());

console.log(stack._items);
