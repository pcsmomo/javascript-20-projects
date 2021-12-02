// Stack Overflow

// Recursion
function inception() {
  inception();
}

inception();

// Uncaught RangeError: Maximum call stack size exceeded
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
//     at inception (callstack:2)
