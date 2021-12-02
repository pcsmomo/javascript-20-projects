/*****************/
// Inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

findUser(userData);
// found Johnson Junior

/*****************/
// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// This order mixing make compiling slow down
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// Good example
obj1.a = 30;
obj1.b = 100;
obj2.a = 30;
obj2.b = 100;

// So that delete keyword makes compiler confusing. It slows down.
delete obj1.x;
