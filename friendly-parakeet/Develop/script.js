// Assignment code here
var lowercase;
var uppercase;
var numeric;
var spchar;
var charLength;
var characters;

//  Actual characters in password
var lowercaseChar = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var spcharChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', "{", "}", '[', ']', '|', ";", ":", '?', '>', '<', '`', '~']

// What the user wants in their password
var userinput = [];
// The characters generated for Char variables at random from userinput
var characters = [];
// The actual password
var password = [];



function generatePassword() {
charLength = prompt('How many characters do you want your password to be? Must be between 8 and 128 characters.');
console.log(charLength);
if (charLength >= 8 && charLength <= 128) {
alert(`Your password will be ${charLength} characters long.`);
criteria ();
}

else if (charLength === null){
  return;
}

else {
  alert('Invalid Response. Please try again.')

generatePassword();
}
}

function criteria() {
lowercase = confirm('Do you want your password to include lowercase?');

uppercase = confirm('Do you want your password to include uppercase?');

numeric = confirm('Do you want your password to include numbers?');

spchar = confirm('Do you want your password to include special characters?');

if (lowercase || uppercase || numeric || spchar) {
  alert('You have selected the criteria for your password')
  criteriaResults();
}
else {
  alert('You must make at least one criteria selection. Try again.')
  criteria();
}
}

function criteriaResults() {
  if (lowercase) {
    userinput.push(lowercaseChar);
  }

  if (uppercase) {
    userinput.push(uppercaseChar);
  }

  if (numeric) {
    userinput.push(numericChar);
  }

  if (spcharChar) {
    userinput.push(spcharChar);
  }

  nocommas = userinput.join("")
  generator();
}


function generator() {
// console.log(charLength);
// console.log(userinput);
// console.log(characters);
var straight = userinput.join("");
console.log(straight);
console.log(userinput);
    for (var i = 0; i < charLength; i++) {

      characters = straight[Math.floor(Math.random() * straight.length)];
console.log(characters);
      // characters.toString();
      password.push(characters);

      // console.log(characters);
      console.log(password);
    }

     var passwordText = password.join("");
  console.log(passwordText);

  alert(`Your password is ${passwordText}`)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);