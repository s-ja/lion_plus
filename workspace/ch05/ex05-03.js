function syncFn1() {
  console.log("syncFn1 작업 시작");

  console.log("syncFn1 작업 종료");
  return "syncFn1 result";
}

function syncFn2(f1Result) {
  console.log("syncFn2 작업 시작", f1Result);

  console.log("syncFn2 작업 종료");
  return "syncFn2 result";
}

(function () {
  const result = syncFn1();
  syncFn2(result);
  console.log("test completed");
})();
