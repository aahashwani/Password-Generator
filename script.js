// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndInteger(min, max) {
  if (!max) {
    max = min
    min - 0
  }
  var rand = Math.random ()
  return Math.floor(min * (1 - rand) + rand * max)
  // return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandom(list) {
  return list[getRndInteger(list.length)]
}
 
function generatePassword () {
  
  while (true) {

    var userInput = window.prompt('Please choose a password between 8 to 128 in length')

    if (userInput === null) {
      return
    }
    // parseInt convert and text/string value and converts it into a number
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Thats not a number!")
  }
  else if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert('Password length must be between 8 and 128 characters')
  }
  else {
    break
  }
}
  var upperCaseInput = window.confirm('Would you like to include uppercase letters in your password?') 
  var lowerCaseInput = window.confirm('Would you like to include lowercase letters in your password?') 
  var numbersInput = window.confirm('Would you like to include numbers in your password?') 
  var specialCharactersInput = window.confirm('Would you like to include symbols in your password?') 

  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '|', ':', '"', ';', "'", '<', '>', ',', '.', '?', '/', '`', '~'];

  var option = []

  if (upperCaseInput === true) {
    option.push(upperCase)
  }
  if (lowerCaseInput === true) {
    option.push(lowerCase)
  }
  if (numbersInput === true) {
    option.push(numbers)
  }
  if (specialCharactersInput === true) {
    option.push(specialCharacters)
  }

    var newPassword = ""

    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandom(option)
      var randomCharacter = getRandom[randomList];
      newPassword += randomCharacter;
      // ^ what this is doing. newPassword = newPassword + randomCharacter;
      // console.log(randomCharacter)
      
    }
    
    return newPassword;
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

