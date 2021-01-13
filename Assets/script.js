// Assignment Code


// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  Alphabetical Uppercase characters
var alphaUpperCase = alpha.map(function (x) {
  return x.toUpperCase();
});
var passwordLength;

var choices;
// let generateBtn = document.querySelector("#generate");

document.querySelector("#generate").addEventListener("click", generatePassword);




// Password Lenght
function generatePassword() {

  var passwordLength = window.prompt("Pick the length of password between 8 and 128")

  if (!passwordLength) {
    window.alert("you gone and done it!")
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Pick the length of password between 8 and 128")
  }
  else {
    var passwordUpperCase = window.confirm("Uppercase Letters - Ok or cancel");

    var passwordLowerCase = window.confirm("Lowercase Letters - Ok or cancel");

    var passwordNumbers = window.confirm("Numbers - Ok or Cancel");

    var passwordCharacters = window.confirm("Special Characters? Ok or Cancel");

  }

  // This is giving us 4 possitive options.
  if (passwordLowerCase && passwordUpperCase && passwordNumbers && passwordCharacters) {
    choices = alpha.concat(alphaUpperCase, number, character);
  }

  // THESE STATEMENTS ARE TELLING YOU WHICH VARIABLE IS TAKEN OUT
  // This giving us 3 options without characters
  else if (passwordLowerCase && passwordUpperCase && passwordNumbers) {
    choices = alpha.concat(alphaUpperCase, number);
  }
  // 3 options without numbers
  else if (passwordLowerCase && passwordUpperCase && passwordCharacters) {
    choices = alpha.concat(alphaUpperCase, character);
  }
  // 3 options without uppercase
  else if (passwordLowerCase && passwordNumbers && passwordCharacters) {
    choices = alpha.concat(number, character);
  }
  // 3 options without lowercase
  else if (passwordUpperCase && passwordNumbers && passwordCharacters) {
    choices = number.concat(alphaUpperCase, character);
  }
  // THESE STATEMENTS ARE TELLING YOU WHICH VARIABLE ARE THERE.
  // ALL INCLUDE LOWERCASE
  // 2 options of lower and uppercase
  else if (passwordLowerCase && passwordUpperCase) {
    choices = alpha.concat(alphaUpperCase);
  }

  // 2 options of lowercase and charcters
  else if (passwordLowerCase && passwordCharacters) {
    choices = alpha.concat(character);
  }
  // 2 options of lowercase and numbers
  else if (passwordLowerCase && passwordNumbers) {
    choices = alpha.concat(number);

  }
  // ALL INCLUDE UPPERCASE

  // ALL INCLUDE NUMBERS

  // CHARACTERS







}

generatePassword()








  // THIS IS THE OLD STUFF BEFORE I MERGED THEM INTO ONE LOG

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



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//   click event 

// // THEN I am presented with a series of prompts for password criteria
// window.prompt("")
// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password


// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters
// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and / or special characters
// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected
// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria
// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page


// RYAN TEXT
  // let hasUpperCase = confirm("Do you want your password to have case sensitive?");
  // let hasNumbers = confirm("Do you want your password to have numbers?");
  // let hasCharacters = confirm("Do you want your password to have special characters?");
  // document.getElementById("password").value = "User selected options: " + passwordLength + ' ' + hasLowerCase + ' ' + hasNumbers + ' ' + hasCharacters;


// start function
// promts 
// passwordLength = window.promts("How many characters?")  how many charcters 
// caps 
// numbers 

// call password function

// passsword function
// build a password by including
//   how many characters (passwordLength)
//   caps 
//   numbers
