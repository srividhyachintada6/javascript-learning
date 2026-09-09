// Day 1 - JavaScript Basics

// 1. console.log()
console.log("Hello JavaScript!");


// 2. Variables

let name = "Srividhya";
const age = 21;

console.log(name);
console.log(age);


// 3. Data Types

let studentName = "Srividhya";  // String
let marks = 88;                 // Number
let isStudent = true;           // Boolean
let result;                     // Undefined
let value = null;               // Null

console.log(studentName);
console.log(marks);
console.log(isStudent);
console.log(result);
console.log(value);


// 4. Arithmetic Operators

let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// 5. Comparison Operators

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a <= b);


// 6. Logical Operators

let hasID = true;
let hasTicket = true;

console.log(hasID && hasTicket);
console.log(hasID || hasTicket);
console.log(!hasID);


// 7. Simple Problem

let studentMarks = 75;

if (studentMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 8. Shopping Bill

let price = 500;
let quantity = 3;

let total = price * quantity;

console.log("Total Bill:", total);


// 9. Percentage

let maths = 80;
let science = 75;
let english = 85;

let totalMarks = maths + science + english;
let percentage = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage);


// 10. Swap Two Variables

let first = 10;
let second = 20;

let temp = first;
first = second;
second = temp;

console.log("First:", first);
console.log("Second:", second);