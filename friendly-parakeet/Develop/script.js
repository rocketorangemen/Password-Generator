// Assignment code here
var lowercase;
var uppercase;
var numeric;
var spchar;
var charLength;

var lowercaseChar = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var spcharChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', "{", "}", '[', ']', '|', ";", ":", ',', '?', '>', '<', '`', '~']

var userinput = [];
var password = [];



function generatePassword() {
var charLength;
charLength = prompt('How many characters do you want your password to be? Must be between 8 and 128 characters.');

if (charLength >= 8 && charLength <= 128) {
alert(`Your password will be ${charLength} characters long.`);
criteria ();
}

else {
  alert('Invalid Response. Please try again.')

return generatePassword();
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
  return criteria();
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

  console.log(userinput);
  generator();
}

function generator() {
            console.log("test");
  // characters =userinput[Math.floor(Math.random() * charLength.length)];

  //   for (var characters = 1; characters <= charLength; characters++) {
  //   characters.push(password);

  // console.log(password);
  // }
  // var passwordText = password.toString();
  // console.log(passwordText);
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