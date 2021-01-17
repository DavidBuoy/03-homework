// Assignment Code


// Special characters 
var wordBankCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var wordBankNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var wordBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  Alphabetical Uppercase characters
var wordBankUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// This is the button that when you click it it generates the password
document.querySelector("#generate").addEventListener("click", generatePassword);





// Password Lenght Options
function generatePassword() {

  var storePasswordBank = []
  
  // This variable is holding an array of the random password generated below.
  var password = []

  // This Variable is designed to choice how many characters your password holds. 
  var passwordLength = window.prompt("Pick the length of password between 8 and 128")

  var pattern = new RegExp("[0-9]");
  
  if (!passwordLength) {
   window.alert("Value cannot be empty")
   return;
  }

  else if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please pick a Numerical Value between 8 and 128.")
  return;
  }
  else if (!pattern.test(passwordLength)) {
  window.alert("Must be a Numerical Value.")
  return;
  }


  // This Else is saying you also need to choice if you want your password to have numbers, characters and be case sensitive in your password. 
  
    var passwordUpperCase = window.confirm("Uppercase Letters - Ok or cancel");

    var passwordNumbers = window.confirm("Numbers - Ok or Cancel");

    var passwordCharacters = window.confirm("Special Characters? Ok or Cancel");


  
  if (passwordUpperCase) {
    storePasswordBank.push (wordBankUpper[Math.floor(Math.random() * wordBankUpper.length)]);
    passwordLength--;
    wordBank= wordBank.concat(wordBankUpper)
  }
  if (passwordNumbers) {
    storePasswordBank.push (wordBankNumber[Math.floor(Math.random() * wordBankNumber.length)]);
    passwordLength--;
    wordBank = wordBank.concat(wordBankNumber)
  }
  if (passwordCharacters) {
    storePasswordBank.push (wordBankCharacter[Math.floor(Math.random() * wordBankCharacter.length)]);
    passwordLength--;
    wordBank = wordBank.concat(wordBankCharacter)
  }
 

  // randomly selects an item out of the array.
  // push that iteam into the password array. 
  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = wordBank[Math.floor(Math.random() * wordBank.length)];
    password.push(pickChoices);
  }
  // this is where it takes all the info from above and puts it into a final password
  password = password.concat(storePasswordBank);
  
  var theFinalPassword = password.join("");

  document.getElementById("password").textContent = theFinalPassword;

}







  //  JUST STEPS THAT I USED IN PROCESS. NOT SURE IF I NEED THIS IN HERE JUST THOUGHT ID INCLUDE IT. 

  // var generateBtn = window.prompt(
  //   character[Math.floor(Math.random() * character.length)] +
  //   number[Math.floor(Math.random() * number.length)] +
  //   alpha[Math.floor(Math.random() * alpha.length)] +
  //   alphaUpperCase[Math.floor(Math.random() * alphaUpperCase.length)]
  // );

  // console.log(alpha [Math.floor(Math.random() * alpha.length)])
  // console.log(number [Math.floor(Math.random() * number.length)])
  // console.log(character [Math.floor(Math.random() * character.length)])


  // MATH PART
  // var displayPassword = window.prompt(
  //   character [Math.floor(Math.random() * character.length)] + 
  //   number [Math.floor(Math.random() * number.length)] + 
  //   alpha [Math.floor(Math.random() * alpha.length)]
  //   );



  // var computerChoice = options[index];

  //ORIGINAL TEXT 
  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");
  // passwordText.value = password;