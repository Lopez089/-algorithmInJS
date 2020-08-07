"use strict";
exports.__esModule = true;
//import Stack from './services/stack'
var queue_1 = require("./queue");
// instancia Queue // 
var queue = new (queue_1["default"]);
queue.enqueue(90);
queue.enqueue(1);
queue.enqueue(9);
queue.enqueue(100);
queue.enqueue(34);
queue.enqueue(3);
queue.enqueue(134);
queue.enqueue(67);
queue.enqueue(95);
queue.enqueue(19);
queue.enqueue(0);
queue.enqueue(143);
console.log(queue.data);
console.log(queue.length());
console.log(queue.isEmpty());
console.log(queue.getFront());
console.log(queue.dequeue());
console.log(queue.data);
console.log(queue.print());
queue.clear();
console.log('eliminado');
console.log(queue.print());
// Instancia Stack //
// const stack = new Stack(73, 89, 9322);
// for (let i: number = 0; i < 2000; i++) {
//   stack.push(i);
// }
// console.log(stack.peek());
// stack.pop();
// console.log(stack.peek());
// console.log(stack._items);
