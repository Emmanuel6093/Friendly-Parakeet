// Prompt 
function generatePassword() {
  let charLength = prompt("How many characters would you like your password to contain?"); 


  if (Number(charLength)) {
    charLength = (Number(charLength));
    if (charLength >= 8 && charLength <= 128) {
      
      let gainLower = confirm("Click Ok to confirm to include lowercase characters");

      let gainUpper = confirm ("Click Ok to include lowercase letters?")

      let gainNum = confirm ("Click Ok to include numeric characters");

      let gainSpec = confirm("Click Ok to include special characters"); 


      if (
        gainLower ||
        gainUpper ||
        gainNum ||
        gainSpec
      ) {
        let passwordText ="";
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
}