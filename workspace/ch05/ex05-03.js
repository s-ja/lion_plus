// function syncFn1() {
//   console.log("syncFn1 작업 시작");

//   console.log("syncFn1 작업 종료");
//   return "syncFn1 result";
// }

// function syncFn2(f1Result) {
//   console.log("syncFn2 작업 시작", f1Result);

//   console.log("syncFn2 작업 종료");
//   return "syncFn2 result";
// }

// (function () {
//   const result = syncFn1();
//   syncFn2(result);
//   console.log("test completed");
// })();

function asyncFn1(resolve) {
  console.log("asyncFn1 work start");
  setTimeout(function () {
    console.log("asyncFn1 work complete");
    resolve("asyncFn1 result");
  }, 3000);
}

function asyncFn2(f1Result, resolve) {
  console.log("asyncFn2 work start", f1Result);
  setTimeout(function () {
    console.log("asyncFn2 work complete");
    resolve("asyncFn2 result");
  }, 2000);
}

(function () {
  asyncFn1(function (result) {
    asyncFn2(result, function (f2result) {
      console.log(f2result);
    });
  });
  console.log("test completed");
})();
