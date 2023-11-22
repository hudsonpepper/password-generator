/* 
This Document is Designed to Generate the correct Character Arrays of each type. The results from this will be logged in the final document.
*/


// Generates Allowed Special Characters in an array using ASCII Codes
let specialArray = [];
for (let i = 32; i < 48; i++) {
  specialArray.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
  specialArray.push(String.fromCharCode(i));
}
for (let i = 91; i < 97; i++) {
  specialArray.push(String.fromCharCode(i));
}
console.log(specialArray);

// Generates Number Characters in a string array using ASCII Codes
let numArray = [];
for(let i = 48; i < 58; i++) {
  numArray.push(String.fromCharCode(i));
}
console.log(numArray);

// Generates Upper-Case Characters in an array using ASCII Codes
let upperCharArray = [];
for(let i = 65; i < 91; i++) {
  upperCharArray.push(String.fromCharCode(i));
}
console.log(upperCharArray);

// Generates Lower-Case Characters in an array using ASCII Codes
let lowerCharArray = [];
for(let i = 97; i < 123; i++) {
  lowerCharArray.push(String.fromCharCode(i));
}
console.log(lowerCharArray);
