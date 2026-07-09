console.log("Hare Krishna !");

//? Beginner Level

// // Create a function named `greet` that prints `"Hello World"`.
// let greet = () => {
//     console.log("Hare Krishna");
// }
// greet()

// // Create a function `add(a, b)` that returns the sum.
// let f = (a, b) => {
//     return console.log(a + b);
// }
// f(5,5)

// // Write a function to calculate the square of a number.
// let f = (a) => {
//     return console.log(a * a);
// }
// f(5)

// // Create a function that checks whether a number is even or odd.
// let check = (n) => {
//     if (n % 2 === 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("Odd");
//     }
// }
// check(10)

// // Write a function that converts Celsius to Fahrenheit.
// let Celsius = (celsius) => {
// 	return console.log((celsius * 9) / 5 + 32);
// };
// Celsius(25)

// // Create a function with default parameter `"Guest"`.
// let n = (name = "Jatin") => {
// console.log(name);
// }
// n("krishna")

// // Write a function that returns the greater of two numbers.
// let check = (n,n1) => {
//     if (n > n1) {
//         return console.log("Num 1 is");
//     } else {
//         return console.log("Num 2 is");
//     }
// }
// check(1,23)

// // Create a function to calculate area of rectangle.
// let cal = (w,h) => {
//     a = w * h
//     return console.log(a);
// }
// cal(23,18)

// // Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
// let ageCheck = (age) => {
//     if (age >= 18) {
//         console.log("you are adult");
//     } else {
//         console.log("you are minor");

//     }
// }
// ageCheck(17)

// // Create a function to reverse a string.
// let str = (str) => {
//      return console.log(str.split("").reverse().join(""));
// }
// str("krishna")

//? Intermediate Level

// // Write a function expression for multiplication.
// let multiplication = (a,b) => {
//     return console.log(a * b);
// }
// multiplication(2,3)

// // Convert a normal function into an arrow function.
// function sum(a, b) {
// 	return console.log(a + b);
// }
// sum(1, 2);

// // Create a function that accepts unlimited numbers and returns their sum using rest operator.
// let loop = (...n) => {
// 	let total = 0;
// 	for (number of n) {
// 		total += number;
// 	}
// 	return console.log(total);
// };
// loop(1, 2, 3, 4, 5);

// // Write a function that counts vowels in a string.
// let count = 0;
// let vowels =  "aeiouAEIOU"
// let check = (str) => {
//     for (string of str) {
//         if (vowels.includes(string)) {
// 					count++;
// 				}
//     }
//     return console.log(count);
// }
// check("JavaScript")

// // Create a function that checks if a string is palindrome.
// let checks = (str) => {
// 	let rev = str.split("").reverse().join("");
// 	if (rev === str) {
// 		console.log("yes");
// 	} else {
// 		console.log("no");
// 	}
// };
// checks("ajja");

// // Write a callback function example using `setTimeout`.
// function greet() {
//     console.log("Call back function");
// }
// setTimeout(greet, 3000)

// // Create a higher-order function that executes another function twice.
// let perent = (child) => {
//     child()
//     child()
// }
// let child = () => {
//     console.log("Hare Krishna");
// }
// perent(child)

// // Write a function that returns another function.
// let a = () => {
//     console.log("One Function !");
//     return () => {
//             console.log("Two Function !");
//         }
// }
// let b = a()
// b()

// // Create a pure function for subtraction.
// function subtraction(a,b) {
//     return a-b
// }
// console.log(subtraction(23,34));

// // Create an impure function using global variable modification.
// let total = 0;
// let function12 = (num) => {
//     total = total + num
//     return total
// }
// console.log(function12(12))
// console.log(function12(12));

//? Advanced Functions

// // Write a recursive function for factorial.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * (factorial(n-1))
// }
// console.log(factorial(5));

// // Write recursive Fibonacci function.
// function Fibonacci(n) {
//     if (n <= 1) {
//         return n
//     }
//     return Fibonacci(n-1) + Fibonacci(n-2)
// }
// console.log(Fibonacci(6));

// // Create a function that finds power using recursion.
// function power(num, times) {
//     if (times === 0) {
// 			return 1;
//     }
//     console.log(num);

//     return num ** times

// }
// console.log(power(2, 3));

// // Create an IIFE that prints `"Executed"`.
// (function () {
// 	console.log("Executed");
// })();

// // Write a function that memoizes factorial calculation.
// function memoizesFactorial() {
// 	let c = {};
// 	return function (n) {
// 		if (c[n]) {
// 			console.log("form c");
// 			return c[n];
// 		}

// 		let result = 1;
// 		for (let i = 1; i <= n; i++) {
// 			result *= i;
// 		}

// 		c[n] = result;
// 		console.log("calculated !");

// 		return result;
// 	};
// }
// let f = memoizesFactorial();
// console.log(f(5));

// // Create a closure counter function.
// let closureFunction = () => {
//     let count = 0

//     return function increments() {
//         count++;
//           console.log(count);

//     }
// }
// let i = closureFunction();
// i()
// i()
// i()

// // Write a function currying example for addition.
// function add(a) {
// 	return function (b) {
// 		return a + b;
// 	};
// }
// console.log(add(10)(20));

// // Create debounce function logic.
// function debounceSearch(func, dely) {
// 	let timer;

// 	return function (...args) {
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			func(...args);
// 		},dely);
// 	};
// }
// function search(value) {
// 	console.log("Search value : ", value);
// }
// let debounceSearchText = debounceSearch(search, 5000);

// debounceSearchText("j");
// debounceSearchText("ja");
// debounceSearchText("jat");
// debounceSearchText("jati");
// debounceSearchText("jatin");

// // Create throttle function logic.
// function throttle(func, dely) {
// 	let canRun = true;

// 	return function (...args) {
// 		if (!canRun) return;
// 		func(...args);
// 		canRun = false;
// 		setTimeout(() => {
// 			canRun = true;
// 		}, dely);
// 	};
// }

// function click() {
// 	console.log("click");
// }

// let callTheFunction = throttle(click, 1000);

// callTheFunction();

// // Write a function that executes only once.
// function once(func) {
// 	let executed = false;

// 	return function (...args) {
// 		if (executed) {
// 			return;
// 		}

// 		executed = true;

// 		return func(...args);
// 	};
// }

// const greet = once(function () {
// 	console.log("Hello");
// });

// greet();
// greet();
// greet();

// // Create custom implementation of `map`.
// Array.prototype.myMap = function (callback) {
// 	let result = [];
// 	for (let i = 0; i < this.length; i++) {
// 		result.push(callback(this[i], i, this));
// 	}
// 	return result;
// };
// const arr = [1, 2, 3];
// const ans = arr.myMap((num) => num * 2);
// console.log(ans);

// // Create custom implementation of `filter`.
// Array.prototype.myFilter = function (callback) {
// 	let result = [];

// 	for (let i = 0; i < this.length; i++) {
// 		if (callback(this[i], i, this)) {
// 			result.push(this[i]);
// 		}
// 	}

// 	return result;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.myFilter((num) => num % 2 === 0));

// // Create custom implementation of `reduce`.
// Array.prototype.myReduce = function (callback, initialValue) {
// 	let accumulator = initialValue;

// 	for (let i = 0; i < this.length; i++) {
// 		accumulator = callback(accumulator, this[i]);
// 	}

// 	return accumulator;
// };

// const arr = [1, 2, 3, 4];

// const sum = arr.myReduce((acc, curr) => acc + curr, 0);

// console.log(sum);

// // Create custom `forEach`.
// Array.prototype.myForEach = function (callback) {
// 	for (let i = 0; i < this.length; i++) {
// 		callback(this[i], i, this);
// 	}
// };

// const arr = [10, 20, 30];

// arr.myForEach((num, index) => {
// 	console.log(index, num);
// });

// // Explain output:
//  function test() {
//      return;
//      console.log("Hello");
// }
// console.log(test());
// Function start huaa or return ho gaya
// Function end ho gaya
// or console.log('hello') kabhi execute hi nahi huaa
// JavaScript return ke baad wali line kabhi execute nahi karta.

//? Arrays Basics : Beginner || Intermediate

// // Create an array of 5 fruits.
// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log(fruits);

// // Print first and last element of array.
// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// // Find length of array.
// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log(fruits.length);

// // Add element at end using `push`.
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange");
// console.log(fruits);

// // Remove last element using `pop`.
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits);

// // Add element at beginning using `unshift`.
// const fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits);

// // Remove first element using `shift`.
// const fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();
// console.log(fruits);

// // Reverse an array.
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// // Sort numbers ascending.
// const numbers = [10, 2, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// // Sort numbers descending.
// const numbers = [10, 2, 5];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// // Use `splice` to remove elements.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1, 2);
// console.log(fruits);

// // Use `splice` to insert elements.
// const fruits = ["Apple", "Orange"];
// fruits.splice(1, 0, "Banana", "Mango");
// console.log(fruits);

// // Use `slice` to copy array.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const copy = fruits.slice();
// console.log(copy);

// // Find index of an element.
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Mango"));

// // Check if array contains a value.
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.includes("Banana"));

// // Join array elements with .
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.join("-"));

// // Merge two arrays using spread operator.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = [...arr1, ...arr2];
// console.log(result);

// // Copy array using spread operator.
// const arr = [10, 20, 30];
// const copy = [...arr];
// console.log(copy);

// // Find maximum value using `Math.max`.
// const numbers = [10, 50, 80, 25];
// console.log(Math.max(...numbers));

// // Swap two variables using destructuring.
// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//? Array Iteration Methods

// Use `forEach` to print all numbers doubled.
// Use `map` to square all numbers.
// Use `filter` to get even numbers.
// Use `reduce` to calculate sum.
// Use `reduce` to find maximum number.
// Use `find` to get first even number.
// Use `findIndex` to locate number > 50.
// Use `some` to check if any number is negative.
// Use `every` to check if all numbers are positive.
// Create array of names and convert all to uppercase.
// Filter all students with marks > 80.
// Calculate average using reduce.
// Count occurrences of numbers in array.
// Flatten nested arrays using `flat`.
// Remove duplicates using `Set`.
// Sort array of objects by age.
// Find total price of shopping cart.
// Group users by age.
// Chain `filter` and `map`.
// Explain difference between `map` and `forEach`.

//? Objects Basics

// Create object for a student.
// Access properties using dot notation.
// Access properties using bracket notation.
// Add new property dynamically.
// Update existing property.
// Delete a property.
// Create object method.
// Use `this` keyword inside method.
// Create nested object.
// 10. Access deeply nested property.
// Destructure object properties.
// Rename variables while destructuring.
// Add default values during destructuring.
// Copy object using spread operator.
// Merge two objects.

//? Advanced Objects + Real Logic

// Use `Object.keys()` on object.
// Use `Object.values()`.
// Use `Object.entries()`.
// Loop through object using `for...in`.
// Freeze an object and test modification.
// Seal an object and test modification.
// Create array of objects for users.
// Find user with highest age.
// Build a mini TODO app using arrays + objects.
// Build a shopping cart system with:
// - add item
// - remove item
// - calculate total
// - quantity update

//? Bonus Hard Questions : Debugging Questions

// const arr = [1, 2, 3];
// arr[10] = 5;
// console.log(arr.length);

// console.log(typeof []);

// console.log([] == false);

//  console.log([1,2] + [3,4]);

// function x(a, b) {
// 	return a + b;
// }
// console.log(x(2));

//? Ultra Advanced Practice

// Build custom `Array.prototype.map`.
// Build custom `Array.prototype.filter`.
// Build custom `Array.prototype.reduce`.
// Implement deep clone function.
// Create student management system.
// Create library management system.
// Create expense tracker logic.
// Build inventory management system.
// Create function composition utility.
// Build calculator using objects and methods.

//? Scenario-Based Questions

// You have an array of users. Return only active users.
// Calculate total revenue from orders array.
// Find second largest number in array.
// Find missing number in array.
// Check whether two objects are equal.

//? Interview-Level Questions

// 1. Difference between:
// - function declaration
// - function expression
// - arrow function
// 1. Difference between:
// - `slice`
// - `splice`
// 1. Difference between:
// - `map`
// - `filter`
// - `reduce`
// 1. Difference between:
// - `for...in`
// - `for...of`
// 1. Difference between:
// - shallow copy
// - deep copy

//? Logic Building Questions

// Rotate array by k positions.
// Find frequency of characters in string.
// Find longest word in sentence.
// Check if two strings are anagrams.
// Capitalize first letter of every word.
// Remove falsy values from array.
// Convert array into object.
// Convert object into array.
// Find duplicate elements.
// Merge two sorted arrays.

//? Real World Practice

// Create authentication validation functions.
// Create OTP generator.
// Create password strength checker.
// Build leaderboard system.
// Create attendance management logic.

//? Advanced Functional Programming

// Implement compose function.
// Implement pipe function.
// Create custom event emitter.
// Build promise-like function logic.
// Create retry mechanism function.

//? Final Challenge Questions

// Build complete Notes App logic.
// Build Student Dashboard logic.
// Build Quiz App data handling.
// Build E-commerce Cart System.
// Build Mini Netflix Watchlist System.
