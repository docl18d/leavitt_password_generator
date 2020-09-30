// The generator will provide a password between 8 and 50 charactors dependant on user input.

//Assignment Code + Event Listener to prompt questions when button pushed
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountnumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay =document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(48,57).concat(arrayFromLowToHigh(58,64).concat(91,96).concat(123,126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterRange)

form.addEventListener('sumbit', e => {
  e.preventDefault()
  const characterAmount = characterAmountnumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsUppercaseElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = passwordDisplay
})

function generatePassword(characterAmount,includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes -charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount, i++) {
    const charactercode = charCodes[Math.floor(math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(charactercode ))
  }
  return passwordCharacters.join('')

  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i<= high; i++){
    array.push(i)
  }
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}



// These are the Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// User input requirments
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// User prompts for User input requirments

// confirmation of password length
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  
    // Loop if answer is outside the parameters 
    while(confirmLength <= 7 || confirmLength >= 51) {
        alert("Password length must be between 8-50 characters Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 
  
        // Repeat back how many charactes the user will have  
        alert(`Your password will have ${confirmLength} characters`);
  
      // Determine parameters of password 
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
        // Loop if answer is outside the parameters 
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
          alert("You must choose at least one parameter");
          var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
          var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
          var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
          var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
      } 
  