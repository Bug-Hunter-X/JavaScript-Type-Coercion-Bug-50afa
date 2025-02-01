function foo(a, b) {
  // Explicit type checking to ensure both parameters are numbers.
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error("Parameters must be numbers");
  }
  return a + b;
}

console.log(foo(5, 5)); // Output: 10
console.log(foo(5, "5")); // Output: NaN