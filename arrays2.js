// Task 1: Initialize the Array
let greetingsArray = new Array(7).fill("Hello");
console.log("Task 1 - Full Array:", greetingsArray);
// Output: ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

// Task 2: Update Part of the Array
greetingsArray.fill("Hi", 2, 5); // Changes index 2, 3, 4
console.log("Task 2 - Partially Updated Array:", greetingsArray);
// Output: ["Hello", "Hello", "Hi", "Hi", "Hi", "Hello", "Hello"]

// Task 3: Populate with a for Loop
let numbersArray = new Array(5);
for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = i * 10;
}
console.log("Task 3 - Numeric Array:", numbersArray);
// Output: [0, 10, 20, 30, 40]
