// 배열에 min() 추가

Array.prototype.min = function () {
  return Math.min(...this);
};

// 모든 함수에 memoization 기능 추가
// isPrime(3)) // 캐시 x
// isPrime.memo(1000000007)) 캐시 o

Function.prototype.memo = function (key) {
  // 캐시를 위한 코드

  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};

// 모든 함수에 memoization 기능 추가

// isPrime(3)) // 캐시 x
// isPrime = isPrime.memoize() 캐시 o
// isPrime(1000000007); -> 캐시 o

Function.prototype.memoize = function () {
  var fn = this; // isPrime
  return function () {
    return fn.memo.apply(fn, arguments);
  };
};
