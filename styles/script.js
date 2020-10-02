// The generator will provide a password between 8 and 50 charactors dependant on user input.

//Assignment Code + Event Listener to prompt questions when button pushed
const passWordBoxEl = document.getElementById('passwordbox')

const includelwrCharsEl = document.getElementById('lwrChars')
const includeUpprCaseEl = document.getElementById('upprChars')
const includeNumbersEl = document.getElementById('numbers')
const includespecialCharsElment = document.getElementById('specialChars')
const wrapper = document.getElementById('wrapper')
const passwordDisplay =document.getElementById('passwordBox')

// assign arrays for the characters
const lwrChars = arrayFromLowToHigh(97,122)
const upperChars = arrayFromLowToHigh(65,90)
const numbers = arrayFromLowToHigh(48,57)
const specialChars = arrayFromLowToHigh(48,57).concat(arrayFromLowToHigh)(58,64).concat(91,96).concat(123,126)

// assign event listeners
characterAmountNumber.addEventListener('click', passGenButn)
characterAmountRange.addEventListener('click', clipboardButn)

form.addEventListener('sumbit', e => {
  e.preventDefault()
  const includecharAmount = includecharAmount.value
  const includelwrCharsEl = includelwrCharsEl.checked
  const includeUpprCaseEl = includeUpprCaseEl.checked
  const includeNumbersEl = includeNumbersEl.checked
  const includespecialCharsElment = includespecialCharsElment.checked
  const password = generatePassword(lwrChars, upprChars, numbers, specialChars)
  passwordDisplay.innerText = passwordDisplay
})

function generatePassword(characterAmount,includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lwrChars
  if (includeUpprCaseEl) charCodes = charCodes.concat(includeUpprCaseEl)
  if (includespecialCharsEl) charCodes = charCodes.concat(includespecialCharsEl)
  if (includeNumbersEl) charCodes -charCodes.concat(includeNumbersEl)

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
