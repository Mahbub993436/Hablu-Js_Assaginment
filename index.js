//JavaScript Basic Problem Solving 1:

// 01. Create Variable:
let carName = "Volvo";// Create a Variable with CarName Volvo.

console.log(carName);

//02. Single Line Variable declare:
let firstName = "John", lastName= "Doe", age = 35;// Create variable in one line;

//04. Correct data type:

let length = 16; // data type = Number.
let sureName = "Johnson"; // data type String. 

const m = {
  firstName: "John",  
  lastName: "Doe"
}; // data type object. 

//05. myfunction:

function myFunction() {
    alert("Hello World!");
}

// 06. Object create :
const person = {
    name : "John",
    age : 50,

}
//alert(person.name + " is "+person.age);

// 07.Button click function:
function myBtn(){
    document.getElementById("demo").innerHTML= "You have clicked me";

}

// 08. Array question:
const cars = ["Volvo", "Jeep", "Mercedes"];
//alert(cars.length); //Calculate Number of item in array.


const brand = ["Volvo", "Jeep", "Mercedes"]; 
brand[0] = "Ford"; // Change the first value of array.
//alert(brand);

// 9. Math Related Problem:

console.log( Math.floor (Math.random() * 10) + 1);//Random Math
console.log((Math.max(10,11,12,13,14,15,16,17,18,19,20,20)));//Math Max Number
console.log(Math.sqrt(9));// Result 3

//10. Comparison operator:

let a = 10;
let b = 5;

//alert(a > b);//Comparison Test.
let myAge = 18;
console.log((myAge < 18 ? "Too young":"Old enough"));// Conditional Ternary operator.


// 2nd Part of Assignment:

/* 01. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.*/
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
 console.log(celsiusToFahrenheit(0)); // 32
 console.log(celsiusToFahrenheit(25)); // 77


 // 02. Function to check if a number is even:

 function isEven (num){
    return (num % 2) === 0;
  }
console.log(isEven(4));//True
console.log(isEven(7))//False)

// 03. Write a function to sum two numbers:

function sumFun(r, s){
    return r + s;
}
console.log(sumFun(5, 6));//11
console.log(sumFun(10, 20));//30

//04.Write a function to find the smallest number in an array.

function findSmallestNum(arr){
    if (arr.length ===0){

    }

    return Math.min(...arr);
  }
  console.log(findSmallestNum([4,6,8,9,14,58,16]));

  //05.Write a function to count the number of vowels in a string.

function findVoielCount(string){
    let vowelscount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let char of string){
      if(vowels.includes(char)){
        vowelscount++;
      }
    }
    return vowelscount;
  
  }
 console.log(findVoielCount('Bangladesh is a beautiful country'));

 //Write a function to get the first element of an array.

 function getFirstElement(arr){
    if (arr.length === 0){
  
    }
    return arr[0];
   }
    console.log(getFirstElement(['Apple', "Orange", " banana"]));

// 07. Function to check if an array is empty:
  
  function isArrayEmpty(arr) {
    return arr.length === 0
    
  }
console.log(isArrayEmpty([]));
  
// 08. Function to return factorial of a Number:
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize (num-1);
  }
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

//09. Function to reverse a string.

  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
//10. function to convert a string to lowercase
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"
  
//11.function to find the length of a string:

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  
  //12. function to merge two arrays
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
  //13. function to get the last element of an array.

  function getLastElement(arr) {
    return arr[arr.length-1] ;
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  
  //14.  function to get the first character of a string.
  function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  
  //15.function to find the sum of all elements in an array.
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
  //The End.........