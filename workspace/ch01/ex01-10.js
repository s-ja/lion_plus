var stack = [100, 200, 300];
// 100, 200, 300 input

// 300, 200, 100 output

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// for (var elem of stack) {
//   console.log(stack.pop(elem));
// }

var queue = [100, 200, 300];

// 100, 200, 300 input

// 100, 200, 300 output

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(stack, queue);
