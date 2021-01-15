// Assignment Code


// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  Alphabetical Uppercase characters
var alphaUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// This is the button that when you click it it generates the password
document.querySelector("#generate").addEventListener("click", generatePassword);





// Password Lenght Options
function generatePassword() {

  // This variable holds your slection or critiria of the window prompts of what you want in your password from above. 
  var choices;

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

    var passwordLowerCase = window.confirm("Lowercase Letters - Ok or cancel");

    var passwordNumbers = window.confirm("Numbers - Ok or Cancel");

    var passwordCharacters = window.confirm("Special Characters? Ok or Cancel");

  // This is giving us all 4 possitive options.
  if (passwordLowerCase && passwordUpperCase && passwordNumbers && passwordCharacters) {
    choices = alpha.concat(alphaUpperCase, number, character);
  }

  // Statements of 3:

  // Uppercase, Lowercase and Numbers
  else if (passwordLowerCase && passwordUpperCase && passwordNumbers) {
    choices = alpha.concat(alphaUpperCase, number);
  }
  // Uppercase, Lowercase and Characters
  else if (passwordLowerCase && passwordUpperCase && passwordCharacters) {
    choices = alpha.concat(alphaUpperCase, character);
  }
  // Lowercase, Numbers and Characters
  else if (passwordLowerCase && passwordNumbers && passwordCharacters) {
    choices = alpha.concat(number, character);
  }
  // 3 Uppercase, Numbers and Characters
  else if (passwordUpperCase && passwordNumbers && passwordCharacters) {
    choices = number.concat(alphaUpperCase, character);
  }

  // Statements of 2

  // Lowercase and Uppercase
  else if (passwordLowerCase && passwordUpperCase) {
    choices = alpha.concat(alphaUpperCase);
  }

  // Lowercase and charcters
  else if (passwordLowerCase && passwordCharacters) {
    choices = alpha.concat(character);
  }
  // Lowercase and Numbers
  else if (passwordLowerCase && passwordNumbers) {
    choices = alpha.concat(number);

  }
  // Uppercase and Characters
  else if (passwordUpperCase && passwordCharacters) {
    choices = alphaUppercase.concat(character);
  }

  // Uppercase and Numbers 
  else if (passwordUpperCase && passwordNumbers) {
    choices = alphaUppercase.concat(number);
  }
  // Numbers & Characters
  else if (passwordNumbers && passwordCharacters) {
    choices = number.concat(character);
  }

  // Individual Choices
  else if (passwordLowerCase) {
    choices = alpha;
  }
  else if (passwordUpperCase) {
    choices = alphaUpperCase;
  }
  else if (passwordNumbers) {
    choices = number;
  }
  else if (passwordCharacters) {
    choices = character;
  }

  else null;






 

  // randomly selects an item out of the array.
  // push that iteam into the password array. 
  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // this is where it takes all the info from above and puts it into a final password
  var theFinalPassword = password.join("");

  document.getElementById("password").textContent = theFinalPassword;

  console.log(theFinalPassword);
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