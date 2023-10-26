// function fn(n1, n2) {
//   console.log(n1, n2);
// }
function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("sum : ", sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(40, 50, 60, 70, 80, 90, 100, 110, 120);

// console.log(fn.arguments); // null
// console.log(fn.this); // undefined
