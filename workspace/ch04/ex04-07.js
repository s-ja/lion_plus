// var alert = "출입 금지!";
// console.log(alert);

function fn() {
  var alert = "출입 금지!";
  console.log(alert);
}

fn();

(function () {
  var alert = "출입 금지!!";
  console.log(alert);
})();


function fn2(alert) {
  console.log(alert);
}
fn2("출입금지1");

(alert => {
  console.log(alert);
})('출입금지2');

alert("작업 완료.");
