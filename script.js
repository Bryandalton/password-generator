// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmmount;
var includeUpperCase
var includeNum;
var includeSymbols;

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const lOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

console.log(UPPERCASE_CHAR_CODES)
console.log(lOWERCASE_CHAR_CODES)
console.log(NUMBER_CHAR_CODES)
console.log(SYMBOL_CHAR_CODES)

// Write password to the #password input
function generatePassword() {
  var characterAmmount = prompt("Please select password length between 8 and 128 characters.")
  console.log(typeof characterAmmount);

  // returns only fail states
if (characterAmmount < 8 || characterAmmount > 128) {
  alert("choose between 8 and 128 characters!");
  return;
} else if(isNaN(parseInt(characterAmmount))) { //typeof characterAmmount !== "number"){
  alert("Invalid input");
  return;
}

var includeUpperCase = confirm("Use uppercase characters?")
var includeNum = confirm("Use numbers?")
var includeSymbols = confirm("Use Symbols?")

  let charCodes = lOWERCASE_CHAR_CODES;
  if (includeUpperCase){
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  }
  if (includeNum) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  }

  var passwordCharacters = []
  for (let i = 0; i < characterAmmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  console.log(includeNum)
  console.log(includeSymbols)
  console.log(includeUpperCase)
  console.log(characterAmmount)
  return passwordCharacters.join("")
}
// generate password 
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)