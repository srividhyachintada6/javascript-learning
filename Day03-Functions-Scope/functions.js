// Day 3 - Functions & Scope


// ==========================================
// 1. BASIC FUNCTION
// ==========================================

function greet() {
    console.log("Hello JavaScript!");
}

greet();


// ==========================================
// 2. FUNCTION WITH PARAMETER
// ==========================================

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Srividhya");
greetUser("Rahul");


// ==========================================
// 3. MULTIPLE PARAMETERS
// ==========================================

function add(a, b) {
    console.log("Sum:", a + b);
}

add(10, 20);
add(5, 15);


// ==========================================
// 4. RETURN VALUE
// ==========================================

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log("Multiplication:", result);


// ==========================================
// 5. FUNCTION FOR EVEN / ODD
// ==========================================

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// ==========================================
// 6. FUNCTION TO FIND LARGEST
// ==========================================

function findLargest(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Largest:", findLargest(25, 40));


// ==========================================
// 7. FUNCTION WITH MULTIPLE CONDITIONS
// ==========================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 75) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log("Grade:", getGrade(85));
console.log("Grade:", getGrade(32));


// ==========================================
// 8. FUNCTION TO CALCULATE AREA
// ==========================================

function rectangleArea(length, width) {
    return length * width;
}

console.log("Area:", rectangleArea(10, 5));


// ==========================================
// 9. FUNCTION WITH LOOP
// ==========================================

function printNumbers(n) {

    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(5);


// ==========================================
// 10. MULTIPLICATION TABLE
// ==========================================

function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

multiplicationTable(5);


// ==========================================
// 11. FUNCTION TO FIND SUM
// ==========================================

function calculateSum(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log("Sum:", calculateSum(10));


// ==========================================
// 12. FUNCTION SCOPE
// ==========================================

function scopeExample() {

    let message = "Inside function";

    console.log(message);
}

scopeExample();


// This would cause an error because
// message exists only inside the function.

// console.log(message);


// ==========================================
// 13. GLOBAL SCOPE
// ==========================================

let globalMessage = "I am outside the function";

function showMessage() {
    console.log(globalMessage);
}

showMessage();


// ==========================================
// 14. BLOCK SCOPE
// ==========================================

if (true) {

    let blockVariable = "Inside block";

    console.log(blockVariable);
}


// This causes an error because
// blockVariable exists only inside the block.

// console.log(blockVariable);


// ==========================================
// 15. ARROW FUNCTION
// ==========================================

const sayHello = () => {
    console.log("Hello from arrow function");
};

sayHello();


// ==========================================
// 16. ARROW FUNCTION WITH PARAMETERS
// ==========================================

const addNumbers = (a, b) => {
    return a + b;
};

console.log("Result:", addNumbers(10, 20));


// ==========================================
// 17. SHORT ARROW FUNCTION
// ==========================================

const square = number => number * number;

console.log("Square:", square(6));


// ==========================================
// 18. PRACTICE
// CHECK POSITIVE / NEGATIVE / ZERO
// ==========================================

function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));