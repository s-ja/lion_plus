// 전개 연산자
var colors = ["two", "three", "four"];
var user = { name: "김철수", age: 30 };

// 함수에서 사용

// 배열 결합

var arr1 = [100, 200];
var arr2 = [300, 400, 500];

var arr3 = [...arr1, ...arr2];

console.log(arr3);

// 객체 결합

var obj1 = { _id: 1, title: "JS study", done: false };
var obj2 = { _id: 2, content: "spread operator", date: "2023-10-25" };
var obj3 = { ...obj1, ...obj2 };

console.log(obj3);
