// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

var colorArr = ["orange", "yellow", "green"];
colorArr.push("black");
colorArr.push("white");
// console.log(colorArr.shift());
// console.log(colorArr.pop());
// printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr2s = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (elem) {
    // 마지막 인덱스에 지정한 elem를 추가
    // length를 1 추가한다.

    // this[this.length] = elem;
    // this.length++;

    // var tmpArr = [];
    // tmpArr.push.call(this, elem);

    // TODO : prototype 단원. 배열의 모든 메소드는 Array.prototype 속성에 정의되어 있음.
    Array.prototype.push.call(this, elem);
  },

  shift: function (elem) {
    // 첫번째 요소를 삭제하고 반환한다.
    // length 를 1 감소시킨다.

    // var first = this[0];
    // for (var i = 0; i < this.length - 1; i++) {
    //   this[i] = this[i + 1];
    // }
    // this.length--;
    // return first;

    return Array.prototype.shift.call(this);
  },

  pop: function (elem) {
    // 배열의 마지막 요소 삭제 후 반환
    // length 를 1 감소

    // var last = this[this.length - 1];
    // this.length--;
    // delete this[this.length - 1];
    // return last;

    return Array.prototype.pop.call(this);
  },
};

arr2s.push("black");
arr2s.push("white");
// console.log(arr2.shift());
console.log(arr2s.pop());

printArr(arr2s);
// console.log(arr2.length);
// console.log(arr2.push); //undefined
// 0 orange
// 1 yellow
// 2 green
// length 3
