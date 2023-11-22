// Assignment code here


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
