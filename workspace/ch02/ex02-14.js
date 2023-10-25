var name = "global";
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())

console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())

var kim = new Object();

kim.name = "kim";
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: "lee",
  age: 40,
  getName: returnName,
};

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(kim.getName(), kim.getName.call(lee));
console.log(lee.getName(), lee.getName.apply(kim));

console.log(returnName(), returnName.call(kim), returnName.apply(lee));
