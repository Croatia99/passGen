
//thes are variables of charachter sets which user can later choose to include
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var nums = "0123456789"
var symbs = "!@#$%^&*?"
//this is a variable which will store the character sets the user chooses to include
var incChars =[]
//this will be the users final password
var finalPass = ""

//these are user prompts that ask the user their password specs
var charNum = prompt("How many characters would you like to include?");
var charCaseup = confirm("Should inlcude uppercase letters?");
var charCasedown = confirm("Should inlcude lowercase letters?");
var incNums = confirm("Should I include number?");
var inCharsymb = confirm("Should I include special characters?");

//this function executes the inclusion or exclusion of characters included in the users pass
var charFig = function(){

  if(charCaseup === true){
    incChars+=upper;
  }
  if(charCasedown === true){
    incChars+=lower;
  }
  if(incNums === true){
      incChars+=nums;
    }
  if(inCharsymb === true){
        incChars+=symbs;
    }


// this loop creates password by turning a random number into a character 
for (i=0; i<charNum; i++){
  var x = Math.floor(Math.random()*incChars.length);

  finalPass+= incChars[x];
  
  console.log(incChars[x]);
}

//this returns the final password
return finalPass;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// this function will print password 
function writePassword() {
  var password = charFig();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this prints the password upon clicking of the button
generateBtn.addEventListener("click", writePassword);
