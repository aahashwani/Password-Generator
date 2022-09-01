// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = [];
var pswChoice = []

// strings created
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', '|', ':', '"', ';', "'", '<', '>', ',', '.', '?', '/', '`', '~'];
 
// this function is running the for loop to have a random string chosen.
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * pswChoice.length);
    password = password + pswChoice[randomIndex];
  }
  return password;
}
// this function is where you are getting the password requirements and info from the user.
function passwordData(){
  pswChoice = [];

  passwordLength = parseInt(prompt('Please choose a password between 8 to 128 in length'));
  
  if (isNaN(passwordLength)) {
    window.alert("Thats not a number!")
    return false;
  }
  else if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert('Password length must be between 8 and 128 characters')
    return false;
  }
  if (confirm('Would you like uppercase letters in your password?')){
    pswChoice = pswChoice.concat(upperCase)
  }
  if (confirm('Would you like lowercase letters in your password?')){
    pswChoice = pswChoice.concat(lowerCase)
  }
  if (confirm('Would you like any numbers in your password?')){
    pswChoice = pswChoice.concat(numbers)
  }
  if (confirm('Would you like any symbols in your password?')){
    pswChoice = pswChoice.concat(specialCharacters)
  }
  return true;
}


// Write password to the #password input 
//this function is creating the javascript into the html to view
function writePassword() {
  var correctPrompts = passwordData();
  // var password = generatePassword();
  var passwordCreated = document.querySelector("#password");
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordCreated.value = newPassword;
}
else {
  passwordCreated.value = "";
}

}

// Add event listener to generate button
// this event listener works when you "click" on generate
generateBtn.addEventListener("click", writePassword);
