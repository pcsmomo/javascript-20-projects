// interpreter vs compiler
function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  console.log(someCalculation(5, 4));
}
