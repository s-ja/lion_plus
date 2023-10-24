var foo = {
  name: "An",
  age: 35,
  job: "teacher",
  married: true,
  "user-name": this.name + "sj",
};

console.log(foo["name"], foo.age, foo.job, foo["married"]);
console.log(typeof foo, foo);

var strFoo = JSON.stringify(foo);

console.log(typeof strFoo, strFoo, strFoo.name);

var parseFoo = JSON.parse(strFoo);

console.log(typeof parseFoo, parseFoo);
