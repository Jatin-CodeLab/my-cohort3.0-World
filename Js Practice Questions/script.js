// ? JavaScript Beginner Practice Questions

//? Console & Basics

// // Print "Hello JavaScript" in the console.
// console.log("Hello JavaScript");

// // Print your name, age, and city using one console.log().
// console.log("My Name is Jatin, age : 18, city : Palanpur.");

// // Print a warning message using console.warn().
// console.warn("YOU ARE MOVE IN WRONG DIRACTION !");

// // Print an error message using console.error().
// console.error("YOU CODE IS VERY LENGTHY");

// // Use console.table() to display an array of 5 numbers.
// console.table([1, 2, 3, 4, 5]);

//? Variables

// // Create a variable called studentName and store your name in it.
// let studentName = "Jatin Prajapati";
// console.log(studentName);

// // Create a variable age and print it.
// let myAge = "20";
// console.log(myAge);

// // Create two variables and swap their values.
// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.table([a, b]);

// // Create a constant variable for PI and print it.
// const PI = 3.14;
// console.log(PI);

// // Declare a variable without assigning a value and print it.
// let withoutAssigning;
// console.log(withoutAssigning);

// // Create a variable score and increase it by 10.
// let score = 376;
// let increasebyTen = 10;
// console.log(score + increasebyTen);

// // Create three variables for first name, last name, and full name.
// let firstName = "Jatin";
// let lastName = "Prajapati";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

//? Data Types

// // Create variables of type string, number, boolean, null, and undefined.
// let stringValue = "String Type";
// console.log(stringValue);

// let numberValue = 1234567890;
// console.log(numberValue);

// let booleanValue = true;
// console.log(booleanValue);

// let nullValue = null;
// console.log(nullValue);

// let undefinedValue;
// console.log(undefinedValue);

// // Check the type of different variables using typeof.
// let stringValueChecktypeof = "String Type";
// console.log(typeof stringValueChecktypeof);

// let numberValueChecktypeof = 1234567890;
// console.log(typeof numberValueChecktypeof);

// let booleanValueChecktypeof = true;
// console.log(typeof booleanValueChecktypeof);

// let undefinedValueChecktypeof;
// console.log(typeof undefinedValueChecktypeof);

// let functionValueChecktypeof = () => {};
// console.log(typeof functionValueChecktypeof);

// let arrayValueChecktypeof = [];
// console.log(typeof arrayValueChecktypeof);

// let objectValueChecktypeof = {};
// console.log(typeof objectValueChecktypeof);

// let symbolValueChecktypeof = Symbol();
// console.log(typeof symbolValueChecktypeof);

// // Store your mobile number in a variable and check its type.
// let myPhoneNumber = 8325467228;
// console.log(typeof myPhoneNumber);

// // Create a variable with value null and check its type.
// let nullValueChecktypeof = null;
// console.log(typeof nullValueChecktypeof);

// // Create a bigint number and print it.
// let bigIntValueChecktypeof = 50n;
// console.log(typeof bigIntValueChecktypeof);

//? Type Conversion & Coercion

// // Convert the string "50" into a number.
// let stringNum = "50";
// let convetToNumber = Number(stringNum);
// console.log(convetToNumber);
// console.log(typeof convetToNumber);

// // Convert the number 100 into a string.
// let number = 100;
// let convetToString = String(number);
// console.log(convetToString);
// console.log(typeof convetToString);

// // Convert "true" into a boolean.
// let bollean = "true";
// let convetToBollean = Boolean(bollean);
// console.log(convetToBollean);
// console.log(typeof convetToBollean);

// // 4. Check the output of:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 1);

// // Create a variable with value "123abc" and convert it into a number.
// let valuej = "123abc";
// console.log(valuej);
// console.log(Number(valuej));

// // Use parseInt() on "500px".
// console.log(parseInt("500px"));

//? Operators

// // Add two numbers and print the result.
// let aNumber = 12;
// let bNumber = 8;
// console.log(aNumber + bNumber);

// // Find the remainder when 25 is divided by 4.
// console.log(25 % 4);

// // Find the square of a number using exponent operator.
// let num = 5;
// let square = num ** 2;
// console.log(square);

// // Increment a variable using `++`.
// let increaseAValue = 19;
// console.log(increaseAValue++);
// console.log(increaseAValue);

// // Decrement a variable using `-`.
// let DecrementAValue = 11;
// console.log(DecrementAValue--);
// console.log(DecrementAValue);

// // Use `+=` operator to increase a variable by 20.
// let lastNumber = 80;
// lastNumber += 20
// console.log(lastNumber);

// // Compare two numbers using `>`, `<`, `>=`, `<=`.
// console.log(10 > 9);
// console.log(10 < 9);
// console.log(10 >= 10);
// console.log(10 <= 9);

// // Check if two values are strictly equal using `===`.
// let x = 23;
// let y = 45;
// if (x === y) {
//     console.log("equle");
// } else {
//     console.log("Not equle");
// }

// // Compare `"10"` and `10` using both `==` and `===`.
// console.log("10" === 10);
// console.log("10" == 10);

// // Create two boolean variables and test `&&`, `||`, and `!`.
// let test = true
// let test1 = false
// console.log(test && test1);
// console.log(test || test1);
// console.log(test != test1);

//? Strings

// // Create a string and print its length.
// let name = "jatin"
// console.log(name.length);

// // Convert a string into uppercase.
// let uppercaseString = "krishna"
// console.log(uppercaseString.toUpperCase());

// // Convert a string into lowercase.
// let lowercaseString = "RADHA";
// console.log(lowercaseString.toLowerCase());

// // Check if a string includes the word `"JavaScript"`.
// let checkIncludes = "Hello ! JavaScript"
// console.log(checkIncludes.includes("JavaScript"));

// // Extract the word `"World"` from `"Hello World"`.
// let textTo = "World";
// console.log("Hello " + textTo);

// // Replace `"apple"` with `"mango"` in a sentence.
// let sentectWord = 'apple'
// sentectWord = "mango"
// console.log(`Hello my new ${sentectWord}`);

// // Split `"HTML,CSS,JS"` into an array.
// let split = "html,css,js"
// console.log(split.split(","));

// // Remove extra spaces from a string.
// let extra = "   hello html my name is krishna    "
// console.log(extra.trim());

// // Repeat the word `"Hi"` 5 times.
// console.log("hello ".repeat(5));

// // Print the first character of a string.
// let ch = "JavaScript"
// console.log(ch[0]);

// // Use template literals to print:`"My name is Aman and I am 20 years old"`
// let aa = "Aman"
// let ageis = 20
// console.log(`My name is ${aa} and I an ${ageis} years old`);

//? Numbers & Math

// // Round `4.7` using `Math.round()`.
// console.log(Math.round(4.5));

// // Find the square root of 81.
// console.log(Math.sqrt(81));

// // Find the maximum number from `10, 20, 5, 99`.
// console.log(Math.max(10,20,5,99));

// // Generate a random number between 1 and 10.
// console.log(Math.random()*10);

// // Convert `"99.99"` into an integer.
// console.log(parseInt("99.99"));

// // Check whether `25` is an integer or not.
// console.log(Number.isInteger(25));

// // Use `toFixed(2)` on `3.141592`.
// console.log(3.141592.toFixed(2));

//? Conditionals

// // Check whether a number is positive or negative.
// let pone = Number(prompt("Enter number"));
// if (pone > 0) {
// 	console.log("positive");
// } else if (pone < 0) {
// 	console.log("negative");
// } else if (pone === 0) {
// 	console.log("zero");
// } else {
// 	console.log(Number("NaN"));
// }

// // Check whether a number is even or odd.
// let evod = Number(prompt("Enter a number : "))
// if (evod % 2 === 0) {
//     console.log("even");
// } else {
// 	console.log("odd");
// }

// // Check whether a person is eligible to vote.
// let age = Number(prompt("enter your age :"))
// if (age >= 18) {
//     console.log("go for vote");
// } else {
//     console.log("you can not for vote");
// }

// // Find the largest among two numbers.
// let num1 = 32
// let num2 = 235
// if (num1 > num2) {
//     console.log("num1 is big");
// } else {
//     console.log("num2 is big");
// }

// // Find the largest among three numbers.
// let num1 = 37;
// let num2 = 35;
// let num3 = 25;
// if (num1 > num2) {
// 	if (num1 > num3) {
// 		console.log("num1 is big");
// 	}
// } else if (num2 > num1) {
// 	if (num2 > num3) {
// 		console.log("num2 is big");
// 	}
// } else {
// 	console.log("num3 is big");
// }

// // Check whether a year is a leap year.
// let year = 2016;

// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
// 	console.log("year is leap year");
// } else {
// 	console.log("year is not leap year");
// }

// // Check whether a number is divisible by both 3 and 5.
// let number = 9
// if (number % 3 === 0) {
//     console.log("this number is divisible by 3");
//     if (number % 5 === 0) {
//         console.log("this number is divisible by both 3 and 5");
//     }
// } else {
//     console.log("not ");
// }

// Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
let studentGrading = 38
if (100 >= studentGrading >= 95) {
	console.log("A+");
}
else if (90 <= studentGrading && studentGrading <= 95) {
	console.log("B");
} else if (80 <= studentGrading && studentGrading <= 90) {
	console.log("C");
} else if (70 <= studentGrading && studentGrading <= 80) {
	console.log("D");
} else if (55 <= studentGrading && studentGrading <= 70) {
	console.log("E");
} else if (37 <= studentGrading && studentGrading <= 55) {
	console.log("F");
} else {
	console.log("FAIL !");
}



// Check whether a character is a vowel or consonant.
// Create a calculator using `switch` statement.
// Print the day name based on a number (1–7).
// Check whether a username is `"admin"` and password is `"1234"`.
