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

//! Async

// function asyncFn1(resolve) {
//   console.log("asyncFn1 work start");
//   setTimeout(function () {
//     console.log("asyncFn1 work complete");
//     resolve("asyncFn1 result");
//   }, 3000);
// }

// function asyncFn2(f1Result, resolve) {
//   console.log("asyncFn2 work start", f1Result);
//   setTimeout(function () {
//     console.log("asyncFn2 work complete");
//     resolve("asyncFn2 result");
//   }, 2000);
// }

// (function () {
//   asyncFn1(function (result) {
//     asyncFn2(result, function (f2Result) {
//       console.log(f2Result);
//     });
//   });
//   console.log("test completed");
// })();

//! ES6 Promise

function promiseFn1() {
  return new Promise(function (resolve, reject) {
    console.log("promiseFn1 work start");
    setTimeout(function () {
      console.log("promiseFn1 work complete");
      resolve("promiseFn1 result");
    }, 3000);
  });
}

function promiseFn2(f1Result) {
  return new Promise(function (resolve, reject) {
    console.log("promiseFn2 work start", f1Result);
    setTimeout(function () {
      console.log("promiseFn2 work complete");
      resolve("promiseFn2 result");
    }, 2000);
  });
}

//! ES6 Promise 2015

// (function () {
//   promiseFn1()
//     .then(promiseFn2)
//     .then(() => console.log("test complete"))
//     .catch((err) => console.error(err));
// })();

//! async/await ES2017

async function working() {
  var f1Result = await promiseFn1();
  var f2Result = await promiseFn2(f1Result);
  console.log("work completed", f2Result);
}

(function () {
  working();
  console.log("event completed");
})();
