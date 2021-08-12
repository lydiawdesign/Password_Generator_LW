// Assignment Code
var generateBtn = document.querySelector("#generate");

// Listing the arrays of the Special characters, numbers, and the alphabet
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter =   ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// going through the series of prompts/questions for users  
var numberCharacter = prompt ("How many characters would you like in your password (between 1-128)?");

var numbers = confirm("Would you like to add a number to your random password?");
var uppercases = confirm ("Would you like to include uppercase letters in your password?");
var lowercases = confirm ("Would you like to include lowercase letters in your password?");
var characters = confirm ("Would you like to include special characters in your password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  // Me adding code here everything above in this function was already here 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
