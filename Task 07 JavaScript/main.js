// Variables
let age = 25;
console.log(age);

const salary = 80000;
console.log(salary);

// Data Types
const name = "Daniyal";
const language = "Javascript";

const total = 0;
const PI = 3.142;

const isPrimaryNumber = true;
const isNewUser = false;

let result;

const data = null;

const person = {
  name: {
    firstName: "Bruce",
    lastName: "Wane",
  },
  age: 30,
};

console.log(person.name.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);

// Operators
let x = 10;
let y = 15;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(++x);
console.log(--y);

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x >= y);
console.log(x <= y);

let isValidNumber = x > 8 && 8 > y;
console.log(isValidNumber);

isValidNumber = x > 8 || 8 > y;
console.log(isValidNumber);

const isValid = true;
console.log(!isValid);

console.log("Bruce" + "Wayne");

const isEven = 10 % 2 === 0 ? "Number is even" : "Number is false";
console.log(isEven);

console.log(2 + "3");
console.log(true + "3");
console.log("4" - "3");
console.log("4" * "3");
console.log("4" / "3");
console.log("4" % "3");
console.log("Bruce" % "Wayne");
console.log("5" - true);
console.log("5" - false);
console.log("5" - null);
console.log("5" - undefined);

console.log(Number("45"));

console.log(Number("false"));

console.log(Number(""));

console.log(parseInt("5"));

console.log(parseFloat("5.3"));

console.log(String(5));

console.log((750).toString());

console.log(Boolean(10));

const var1 = "10";
const var2 = 10;

console.log(var1 == var2);
console.log(var1 === var2);

const num = 5;

if (num > 0) {
  console.log(`Number ${num} is positive.`);
} else if (num < 0) {
  console.log(`Number ${num} is not positive.`);
} else {
  console.log(`Number is ${num}.`);
}

const color = "blue";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "violet":
    console.log("The color is violet");
    break;
  default:
    console.log("Not a valid color");
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 5);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of arr1) {
  console.log("Iteration number " + num);
}

function greet() {
  console.log("Hello world");
}
greet();

function returnDetails(userName) {
  return `Details are ${userName}`;
}

function enterDetails(firstName, lastName) {
  return returnDetails(`${firstName} ${lastName}`);
}

ed = enterDetails("Miachel", "Clark");
console.log(ed);

const add = (a, b) => {
    return a + b;
};

const sum = add(1, 2);
console.log(sum);