// Day 4 - Arrays & Array Basics 


// 1. CREATE AN ARRAY 

let fruits = ["Apple", "Banana", "Mango", "Orange"]; 

console.log(fruits); 


// 2. ACCESS ARRAY ELEMENTS 

console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 


// 3. ARRAY LENGTH 

console.log("Length:", fruits.length); 


// 4. CHANGE AN ELEMENT 

fruits[1] = "Grapes"; 

console.log(fruits); 


// 5. ADD ELEMENT - PUSH 

fruits.push("Watermelon"); 

console.log(fruits); 


// 6. REMOVE LAST ELEMENT - POP 

fruits.pop(); 

console.log(fruits); 


// 7. ADD ELEMENT AT BEGINNING - UNSHIFT 

fruits.unshift("Pineapple"); 

console.log(fruits); 


// 8. REMOVE FIRST ELEMENT - SHIFT 

fruits.shift(); 

console.log(fruits); 


// 9. LOOP THROUGH ARRAY 

for (let i = 0; i < fruits.length; i++) { 
    console.log(fruits[i]); 
} 


// 10. FIND SUM OF ARRAY 

let numbers = [10, 20, 30, 40, 50]; 

let sum = 0; 

for (let i = 0; i < numbers.length; i++) { 
    sum = sum + numbers[i]; 
} 

console.log("Sum:", sum); 


// 11. FIND LARGEST ELEMENT 

let values = [10, 45, 23, 67, 12]; 

let largest = values[0]; 

for (let i = 1; i < values.length; i++) { 

    if (values[i] > largest) { 
        largest = values[i]; 
    } 
} 

console.log("Largest:", largest); 


// 12. FIND SMALLEST ELEMENT 

let smallest = values[0]; 

for (let i = 1; i < values.length; i++) { 

    if (values[i] < smallest) { 
        smallest = values[i]; 
    } 
} 

console.log("Smallest:", smallest); 


// 13. CHECK WHETHER ELEMENT EXISTS 

let names = ["Ravi", "Anu", "Srividhya", "Rahul"]; 

console.log(names.includes("Srividhya")); 
console.log(names.includes("Kiran")); 


// 14. FIND INDEX 

console.log(names.indexOf("Srividhya")); 
console.log(names.indexOf("Kiran")); 


// 15. JOIN ARRAY ELEMENTS 

let subjects = ["Java", "JavaScript", "React", "SQL"]; 

console.log(subjects.join(", ")); 


// 16. SLICE 

let numbers2 = [10, 20, 30, 40, 50]; 

let part = numbers2.slice(1, 4); 

console.log(part); 
console.log(numbers2); 


// 17. SPLICE 

let numbers3 = [10, 20, 30, 40, 50]; 

numbers3.splice(2, 1); 

console.log(numbers3); 


// 18. INSERT USING SPLICE 

let numbers4 = [10, 20, 40, 50]; 

numbers4.splice(2, 0, 30); 

console.log(numbers4); 


// 19. DELETE AND INSERT USING SPLICE 

let numbers5 = [10, 20, 30, 40, 50]; 

numbers5.splice(2, 1, 100); 

console.log(numbers5); 


// 20. REVERSE ARRAY 

let numbers6 = [1, 2, 3, 4, 5]; 

numbers6.reverse(); 

console.log(numbers6); 


// 21. SORT 

let numbers7 = [5, 2, 8, 1, 4]; 

numbers7.sort(); 

console.log(numbers7); 


// 22. ARRAY OF STRINGS 

let students = ["Ravi", "Anu", "Priya", "Rahul"]; 

for (let i = 0; i < students.length; i++) { 
    console.log("Student:", students[i]); 
} 


// 23. ARRAY + FUNCTION 

function printArray(arr) { 

    for (let i = 0; i < arr.length; i++) { 
        console.log(arr[i]); 
    } 
} 

printArray([10, 20, 30, 40]); 


// 24. FIND EVEN NUMBERS 

let nums = [1, 2, 3, 4, 5, 6, 7, 8]; 

for (let i = 0; i < nums.length; i++) { 

    if (nums[i] % 2 === 0) { 
        console.log("Even:", nums[i]); 
    } 
} 


// 25. COUNT EVEN NUMBERS 

let count = 0; 

for (let i = 0; i < nums.length; i++) { 

    if (nums[i] % 2 === 0) { 
        count++; 
    } 
} 

console.log("Even Count:", count);