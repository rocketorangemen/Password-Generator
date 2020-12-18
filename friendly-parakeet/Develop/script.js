// Assignment code here
var lowercase;
var uppercase;
var numeric;
var spchar;

function generatePassword() {
var charLength;
charLength = prompt('How many characters do you want your password to be? Must be between 8 and 128 characters.');

if (charLength >= 8 && charLength <= 128) {
alert(`Your password will be ${charLength} characters long.`);
}

else {
  alert('Invalid Response. Please try again.')

return generatePassword();
}


lowercase = confirm('Do you want your password to include lowercase?');
if (lowercase) {
  alert('Your password will include lowercase.')
}
else {
  alert('Your password will NOT include lowercase.')
}
console.log(lowercase);


uppercase = confirm('Do you want your password to include uppercase?');
if (uppercase) {
  alert('Your password will include uppercase.')
}
else {
  alert('Your password will NOT include uppercase.')
}
console.log(uppercase);


numeric = confirm('Do you want your password to include numbers?');
if (numeric) {
  alert('Your password will include numbers.')
}
else {
  alert('Your password will NOT include numbers.')
}
console.log(numeric);


spchar = confirm('Do you want your password to include special characters?');
if (spchar) {
  alert('Your password will include special characters.')
}
else {
  alert('Your password will NOT include characters.')
}
console.log(spchar);

if (lowercase || uppercase || numeric || spchar) {
  alert('You have selected the criteria for your password')
}
else {
  alert('You must make at least one criteria selection. Try again.')
}
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