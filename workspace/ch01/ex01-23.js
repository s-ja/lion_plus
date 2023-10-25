// 함수의 매개변수에 적용
// function fn(a, b, ...rest, c) { // Error
// function fn(a, b, ...rest, ...args) { // Error
function fn(a, b, ...rest) {
  console.log(a, b, rest);
}

fn(); // undefined undefined []
fn(1); // 1 undefined []
fn(2, 3); // 2 3 []
fn(4, 5, 6); // 4 5 [6]
fn(7, 8, 9, 10, 11); // 7 8 [9, 10, 11]

// 구조 분해 할당에서 사용

var [first, second, ...rest] = [100, 200, 300, 400, 500, 600];

console.log(first, second, rest);

var user = {
  name: "안승지",
  age: 30,
  phone: "01086428777",
  address: "서울특별시 영등포구",
};

var { name, age, ...etc } = user;

console.log(name, age, etc.phone, etc.address, etc);
