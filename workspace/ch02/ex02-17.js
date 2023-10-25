// ex02-14.js 복사

var name = "global";
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())

console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())

// var kim = new Object();

// kim.name = "kim";
// kim.age = 30;
// kim.getName = returnName;

// var lee = {
//   name: "lee",
//   age: 40,
//   getName: returnName,
// };

// 객체를 생성해서 반환하는 함수 (생성자)

function Person(name, age) {
  //   var obj = {};

  if (!(this instanceof Person)) {
    return new Person(name, age);
  }

  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };

  //   return obj;
}

var kim = new Person("kim", 30);
var lee = new Person("lee", 40);
var hong = Person("hong", 100);

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(kim.getName(), kim.getName.call(lee));
console.log(lee.getName(), lee.getName.apply(kim));

console.log(returnName(), returnName.call(kim), returnName.apply(lee));

console.log(hong.age, hong.getName());
