// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '|', ':', '"', ';', "'", '<', '>', ',', '.', '?', '/', '`', '~'];

var passwordLength;
// Write password to the #password input
// () at end means function is being called.


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var newPassword = ''
  passwordLength = prompt ('Please enter a password length greater than 8')
  for (let index = 0; index < passwordLength; index++) {
    var randomIndex = getRndInteger(0, upperCase.length - 1);
    const randomCharacter = upperCase[randomIndex];
    newPassword += randomCharacter;
    // ^ what this is doing. newPassword = newPassword + randomCharacter;
    
  }
  
  return newPassword;
}

// Add event listener to generate button
// you have to click for the event to happen.
generateBtn.addEventListener("click", writePassword);
