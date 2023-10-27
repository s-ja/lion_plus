function syncFn1(){
  console.log('syncFn1 작업 시작.');
  // ...
  console.log('syncFn1 작업 종료.');
  return 'syncFn1의 결과물';
}

function syncFn2(f1Result){
  console.log('syncFn2 작업 시작.', f1Result);
  // ...
  console.log('syncFn2 작업 종료.');
  return 'syncFn2의 결과물';
}

(function(){
  const result = syncFn1();
  syncFn2(result);
  console.log('테스트 종료.');
})();
