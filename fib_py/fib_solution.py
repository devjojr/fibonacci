class Fibonacci:
    def iterative_fib(self, num):
        a, b = 0, 1
        for _ in range(num):
            a, b = b, a + b
        return a

    def recursive_fib(self, num):
        if num == 0 or num == 1:
            return num
        return self.recursive_fib(num - 1) + self.recursive_fib(num - 2)

    def dynamic_fib(self, num):
        cache = {}
        return self._dynamic_fib(cache, num)

    def _dynamic_fib(self, cache, num):
        if num == 0 or num == 1:
            return num
        if num in cache:
            return cache[num]
        cache[num] = self._dynamic_fib(cache, num - 1) + self._dynamic_fib(
            cache, num - 2
        )
        return cache[num]


fib = Fibonacci()
print(fib.iterative_fib(7))
print(fib.recursive_fib(7))
print(fib.dynamic_fib(7))
