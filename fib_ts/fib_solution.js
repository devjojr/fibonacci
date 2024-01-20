var Fibonacci = /** @class */ (function () {
  function Fibonacci() {}
  Fibonacci.prototype.iterativeFib = function (num) {
    var _a;
    var a = 0;
    var b = 1;
    for (var _ = 0; _ < num; _++) {
      (_a = [b, a + b]), (a = _a[0]), (b = _a[1]);
    }
    return a;
  };
  Fibonacci.prototype.recursiveFib = function (num) {
    if (num === 0 || num === 1) {
      return num;
    }
    return this.recursiveFib(num - 1) + this.recursiveFib(num - 2);
  };
  Fibonacci.prototype.dynamicFib = function (num) {
    var cache = {};
    return this._dynamicFib(cache, num);
  };
  Fibonacci.prototype._dynamicFib = function (cache, num) {
    if (num === 0 || num === 1) {
      return num;
    }
    if (num in cache) {
      return cache[num];
    }
    cache[num] =
      this._dynamicFib(cache, num - 1) + this._dynamicFib(cache, num - 2);
    return cache[num];
  };
  return Fibonacci;
})();
var fib = new Fibonacci();
console.log(fib.iterativeFib(7));
console.log(fib.recursiveFib(7));
console.log(fib.dynamicFib(7));
