// Assignment Code
var generateBtn = document.querySelector("#generate");

// Listing the arrays of the Special characters, numbers, and the alphabet to reference later on
var characterLength = 8;
var choiceArray = [];

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter =   ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getPrompts () {
  // asking the user the length of their desired password while using parseInt so that the string will be converted to an integer
  characterLength = parseInt(prompt("How many charcters would you like your password to be (between 8-128)?"));

  // setting perameters so that user picks a number between 8 and 128, if they do not then an alert will show asking them to try again. 
  if (isNaN(characterLength) || characterLength < 8 || characterLength < 128) {
    alert("Please list a number between 8 and 128. Try again!!")
    return false; 
  }

  // asking user if they would like lowercase letters in their password and if so then we will add the array listed above
  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerLetters);
  }


  // asking user if they would like uppercase letters in their password and if yes we will add the array listed above
  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperLetters);
  }

  // asking user if they would like numbers in their password and if yes we will add the array listed above
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArray = choiceArray.concat(numbers);
  }

  // asking user if they would like special characters in their password and if yes we will add the array listed above
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArray = choiceArray.concat(specialCharacter);
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button so that when the generate button is clicked then the write password function is set off
generateBtn.addEventListener("click", writePassword);

// generating the password based on that the answers to the prompts 
function generatePassword () {

}



