//declaration
let z;
//assignng value to z
z = 5;

console.log(z);

//this is a number variable
let x = 5;

//this is a string variable
let y = "number 5";

const my_fave_number = 7; // this variable cannot be changed

console.log(my_fave_number); // prints 7

x = 10 + my_fave_number; // we can use the const
console.log(my_fave_number); // prints 17

// my_fave_number = 9; // error, this cannot be changed

let a = "Hello, World!"; // <-- Had to get that one out of the way!
let b ='This is JavaScript!'; // Can use single or double quotes
let c = "7"; //includes numbers, but not read as numbers 
let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
let e = 'It\'s Seven'; //alternatively, you can use backslashes to ignore special characters in strings
console.log(e);
console.log(typeof(e))