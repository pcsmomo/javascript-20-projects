// Example 1
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

// Example 2
function printHello() {
  console.log("Hello from baz");
}

function baz() {
  setTimeout(printHello, 3000);
}

function bar() {
  baz();
}

function foo() {
  bar();
}

foo();
