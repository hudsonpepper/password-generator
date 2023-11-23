// Assignment Code
function getUserPreferences() {
  let preferencesArray = [20, false, true, true, true];
  // TODO: Make PreferencesArray from user Input
  
  // preferencesArray[0] = window.prompt("How many characters long do you want your password?");
  // preferencesArray[1] = window.confirm("Do you want special characters?");
  // preferencesArray[2] = window.confirm("Do you want numbers?");
  // preferencesArray[3] = window.confirm("Do you want lower-case letters?");
  // preferencesArray[4] = window.confirm("Do you want upper-case letters?");
  // Special Cases: 
  /*
  password length: 8-128
  at least one type of character type is true
  */
  return preferencesArray;
}
function shuffleArray(arr) {
  // Fisher Yates Shuffle:  Source = https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = arr.length - 1; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    source_elem = arr[i];
    target_elem = arr[randomIndex];
    arr[i] = target_elem;
    arr[randomIndex] = source_elem;
  }
  return arr;
}
function generatePassword([lengthPassword, hasSpecial, hasNumber, hasLower, hasUpper] = [10, true, true, true, true]) {
  // Function generates Password with default values specifying that it be 10 char long and contains all character types
  // Char Sets: 
  let specialArray = [" ","!","\"", "#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`"];
  let numArray = ["0","1","2","3","4","5","6","7","8","9"];
  let lowerCharArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCharArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // initializations: 
  let passwordArray = []; // Will contain the characters of the final password
  let allowedCharArray = []; // Will contain the set of allowed characters in the password
  let numType = 0; // Will contain the total number of allowed types of characters 
  
  // If Statements count the number of types of allowed characters, make an allowedCharArray, 
  // and make the first few characters each of the types of allowed characters.
  if(hasSpecial) {
    //Adds Special Characters to the Set of Allowed Characters
    allowedCharArray = allowedCharArray.concat(specialArray);
    //Makes the next index a special character: which forces the final password to have special characters
    passwordArray.push(specialArray[Math.floor(Math.random()*specialArray.length)]);
    numType++;
  }
  if(hasNumber) {
    //Adds Numbers to the Set of Allowed Characters
    allowedCharArray = allowedCharArray.concat(numArray);
    //Makes the next index a number: which forces the final password to have numbers
    passwordArray.push(numArray[Math.floor(Math.random()*numArray.length)]);
    numType++;
  }
  if(hasLower) {
    //Adds Lower-Case Letters to the Set of Allowed Characters
    allowedCharArray = allowedCharArray.concat(lowerCharArray);
    //Makes the next index a lower-case letter: forcing the final password to have lower-case letters
    passwordArray.push(lowerCharArray[Math.floor(Math.random()*lowerCharArray.length)]);
    numType++;
  }
  if(hasUpper) {
    //Addes Upper-Case Letters to the Set of Allowed Characters
    allowedCharArray = allowedCharArray.concat(upperCharArray);
    //Makes the next index an upper-case letter: forcing the final password to have upper-case letters
    passwordArray.push(upperCharArray[Math.floor(Math.random()*upperCharArray.length)]);
    numType++;
  }
  // Randomizes the remaining slots (lengthPassword - numType) to any of the allowed characters in allowedCharArray
  for (let i = 0; i < lengthPassword - numType; i++) {
    let randomIndex = Math.floor(Math.random()*allowedCharArray.length);
    passwordArray.push(allowedCharArray[randomIndex]);
  }
  // Shuffles the characters to ensure a randomly generated password
  passwordShuffle = shuffleArray(passwordArray);
  // Turns the Password from an array into a string
  passwordFinal = passwordShuffle.join('');
  return passwordFinal;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
function writePassword() {
  console.log("Event Triggered!");
  let preferencesArray = getUserPreferences();
  password = generatePassword(preferencesArray);
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}
*/