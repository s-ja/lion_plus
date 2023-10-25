// Function 생성자 함수

var add = new Function("x", "y", "var result = x+y; return result");

console.log(add(50, 60));
