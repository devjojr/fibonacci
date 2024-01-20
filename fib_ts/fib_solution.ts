class Fibonacci {
  iterativeFib(num: number): number {
    let a = 0;
    let b = 1;

    for (let _ = 0; _ < num; _++) {
      [a, b] = [b, a + b];
    }
    return a;
  }

  recursiveFib(num: number): number {
    if (num === 0 || num === 1) {
      return num;
    }
    return this.recursiveFib(num - 1) + this.recursiveFib(num - 2);
  }

  dynamicFib(num: number): number {
    const cache: { [key: number]: number } = {};
    return this._dynamicFib(cache, num);
  }

  _dynamicFib(cache: { [key: number]: number }, num: number) {
    if (num === 0 || num === 1) {
      return num;
    }
    if (num in cache) {
      return cache[num];
    }
    cache[num] =
      this._dynamicFib(cache, num - 1) + this._dynamicFib(cache, num - 2);

    return cache[num];
  }
}

const fib = new Fibonacci();
console.log(fib.iterativeFib(7));
console.log(fib.recursiveFib(7));
console.log(fib.dynamicFib(7));
