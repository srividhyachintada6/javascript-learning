// Day 2 - Conditions and Loops

// 1. IF STATEMENT

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}


// ==========================================
// 2. IF - ELSE
// ==========================================

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ==========================================
// 3. ELSE IF
// ==========================================

let score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 75) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else if (score >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ==========================================
// 4. NESTED IF
// ==========================================

let studentAge = 20;
let hasID = true;

if (studentAge >= 18) {

    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }

} else {
    console.log("Entry not allowed");
}


// ==========================================
// 5. SWITCH
// ==========================================

let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================================
// 6. FOR LOOP
// ==========================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ==========================================
// 7. PRINT EVEN NUMBERS
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}


// ==========================================
// 8. PRINT ODD NUMBERS
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log("Odd:", i);
    }
}


// ==========================================
// 9. SUM OF NUMBERS
// ==========================================

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// ==========================================
// 10. WHILE LOOP
// ==========================================

let count = 1;

while (count <= 5) {

    console.log("Count:", count);

    count++;
}


// ==========================================
// 11. DO-WHILE LOOP
// ==========================================

let number = 1;

do {

    console.log("Number:", number);

    number++;

} while (number <= 5);


// ==========================================
// 12. BREAK
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log("Break:", i);
}


// ==========================================
// 13. CONTINUE
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log("Continue:", i);
}


// ==========================================
// 14. PRACTICE PROBLEM
// Check whether a number is positive,
// negative or zero
// ==========================================

let num = -10;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ==========================================
// 15. PRACTICE PROBLEM
// Find the largest of two numbers
// ==========================================

let a = 25;
let b = 40;

if (a > b) {
    console.log("Largest:", a);
} else {
    console.log("Largest:", b);
}


// ==========================================
// 16. PRACTICE PROBLEM
// Multiplication table
// ==========================================

let table = 5;

for (let i = 1; i <= 10; i++) {

    console.log(table + " x " + i + " = " + (table * i));

}