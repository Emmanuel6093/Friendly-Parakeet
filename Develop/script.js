// Prompt 
function generatePassword() {
  let charLength = prompt("How many characters would you like your password to contain?"); 


  if (Number(charLength)) {
    charLength = (Number(charLength));
    if (charLength >= 8 && charLength <= 128) {
      
      let gainLower = confirm ("Click Ok to confirm to include lowercase characters");

      let gainUpper = confirm ("Click Ok to include lowercase letters?");

      let gainNum = confirm ("Click Ok to include numeric characters");

      let gainSpec = confirm ("Click Ok to include special characters"); 


      if (
        gainLower ||
        gainUpper ||
        gainNum ||
        gainSpec
      ) {
        let passwordText ="";

        while (passwordText.length < charLength) {
          if (gainLower && passwordText.length < charLength) {
            passwordText += generateRandomLowerLetter(); 
          }
          if (gainUpper && passwordText.length < charLength) {
            passwordText += generateRandomUpperLetter(); 
          }
          if (gainNum && passwordText.length < charLength) {
            passwordText += generateRandomNum();
          }
          if (gainSpec && passwordText.length < charLength) {
            passwordText += generateRandomSpec(); 
      }
    }

    return passwordText; 
  } else {
    alert("Select at least one type of character for your password"); 
    writePassword(); 
  }

} else {
  alert("Please Reselect, password must be no less than 8 and no greater than 128 characters")
  writePassword();
} 

} else {
  alert ("Please Reenter, must contain numeric characters");
  writePassword(); 
  }

}




function generateSpec() {
  let spec = "!#$%&'()*+,/'-./:;<>?@[]{}~";

  let ranNumber = Math.floor(Math.random() * spec.length);
  return spec[ranNumber];

  function generateRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  let letters = "abcdefghijklmnopqrstuvwxyz"; 
  function generateRandomLowerLetter() {
    let ranNumber = Math.floor(Math.random() * letters.length);
    return letters[ranNumber]; 
  }

  function generateRandomUpperLetter() {
    let upper = letters.toUpperCase();
    let ranNumber = Math.floor(Math.random() * upper.length);
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
generateBtn.addEventListener("click", function (){
  let password = generatePassword(); 

  document.querySelector("#password") = password; 
});