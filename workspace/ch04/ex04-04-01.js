var sum = function (x, y, z) {
  return x + y + z;
};

// Function.prototype.partial = function (...preArgs) {
Function.prototype.partial = function (...preArgs) {
  var fn = this;
  var preArgs = [...arguments]; // [20, 80]
  return function () {
    // [30]
    var args = [...preArgs, ...arguments]; // [20, 80, 30]
    // return fn.apply(this, args);
    return fn(...args);
  };
};

var sum100 = sum.partial(20, 80);

console.log(sum100(30), sum100(50));

// var partial = function (fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// };
