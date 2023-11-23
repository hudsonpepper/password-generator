// Assignment code here

/* Game Plan:
X 1. Make Random Character Generator, log to console
X 2. Make Boolean List of Possibilities
  3. Make Random String Generator of set length.
X 4. Incorporate Options into String Generator
  5. Begin linking Possibilities from 2. to User Prompts
  6. Print Result to HTML instead of Console
*/

/* Game Plan V2:
  1. Generate CharacterSet Arrays
  2. Generate OrderedRandomizedCharArray
  3. Make Array Permutation Function
  4. Permute Array and map to string


*/



  // These Will be Set by User Later


// Special Cases: 



// I generated these arrays using the generateArrays.js file, then copied the objects from the console.
let specialArray = [" ","!","\"", "#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`"];
let numArray = ["0","1","2","3","4","5","6","7","8","9"];
let lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCharArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// console.log(numArray.join(''));
function main() {
  passwordArray = generatePasswordArray();
  console.log("Password Array: ", passwordArray);
  console.log("Shuffle: ", shuffleArray(passwordArray));
}

function generatePasswordArray() {

  let lengthPassword = 10; // Must be between 8 - 128
  let hasSpecial = true;
  let hasNumber = true;
  let hasLower = true;
  let hasUpper = true;
  let passwordArray = [];
  let allowedCharArray = [];
  let numType = 0;
  if(hasSpecial) {
    passwordArray.push(specialArray[Math.floor(Math.random()*specialArray.length)]);
    allowedCharArray = allowedCharArray.concat(specialArray);
    numType++;
    // console.log(passwordArray)
    // console.log(allowedCharArray);
  }
  if(hasNumber) {
    passwordArray.push(numArray[Math.floor(Math.random()*numArray.length)]);
    allowedCharArray = allowedCharArray.concat(numArray);
    numType++;
    // console.log(passwordArray);
    // console.log(allowedCharArray);
  }
  if(hasLower) {
    passwordArray.push(lowerCharArray[Math.floor(Math.random()*lowerCharArray.length)]);
    allowedCharArray = allowedCharArray.concat(lowerCharArray);
    numType++;
    // console.log(passwordArray);
    // console.log(allowedCharArray);

  }
  if(hasUpper) {
    passwordArray.push(upperCharArray[Math.floor(Math.random()*upperCharArray.length)]);
    allowedCharArray = allowedCharArray.concat(upperCharArray);
    numType++;
    // console.log(passwordArray);
    // console.log(allowedCharArray);

  }

  for (let i = 0; i < lengthPassword - numType; i++) {
    let randomIndex = Math.floor(Math.random()*allowedCharArray.length);
    // console.log("i = ", i, "| Index: ", randomIndex)
    passwordArray.push(allowedCharArray[randomIndex]);
    // console.log(passwordArray);
    // console.log(allowedCharArray);
  }
  // console.log(passwordArray);
  return passwordArray;
}

// Fisher Yates Shuffle src = https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    source_elem = arr[i];
    target_elem = arr[randomIndex];
    console.log("source: ", arr[i], " target: ", arr[randomIndex]);
    arr[i] = target_elem;
    arr[randomIndex] = source_elem;
    console.log(arr);
  }
  return arr;
}

main();
/*
let randNumChar = function () {
  let randomNumber = Math.floor(Math.random() * 10) + 48;
  return String.fromCharCode(randomNumber);
}
console.log("Number Char: ", randNumChar);

let randUpperChar = function () {
  let randomNumber = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(randomNumber);
}
console.log("Upper Case Char: ", randUpperChar());

let randLowerChar = function () {
  let randomNumber = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(randomNumber);
}
console.log("Lower Case Char: ", randLowerChar)
*/


/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("generate password triggered");
}

// Write password to the #password input
function writePassword() {
  console.log("Event Triggered!");
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
*/