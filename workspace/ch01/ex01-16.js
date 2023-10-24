// 10 + 100의 결과를 출력한다.
// function add() {
//   return 10 + 100;
// }

function add() {
  let n1 = 10;
  let n2 = 100;
  let result = n1 + n2;

  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 숫자와 100의 합계를 출력한다.
// function add100(n1) {
//   return n1 + 100;
// }

function add100(n1) {
  let n2 = 100;
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 두 수의 합계를 출력한다.
// function sum(n1, n2) {
//   return n1 + n2;
// }

function sum(n1, n2) {
  let result = n1 + n2;
  return `${n1}+${n2}=${result}`;
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  return n1 + n2;
}

console.log(add());
add();
add100(20);
add100(30);
console.log(sum(10, 20));
console.log(sum2(20, 30));
