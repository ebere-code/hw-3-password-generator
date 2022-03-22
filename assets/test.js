// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate functions for each character type string
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
  
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
  
function getRandomSymbol(){
    return ("!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
}


// Write password to the #password input
function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");
    
    
    var passwordLength = window.prompt ('How many characters long would you like your password to be?');
    var expression1 = (passwordLength < 8);
    var expression2 = (passwordLength > 128);

    if (expression1 || expression2) {
        var passwordLength = window.prompt ('Please Choose a character count between 8 and 128');
    } 
    var includeLowercase = window.confirm ('Do you want passwor to include lowercase letter?');
    var includeUppercase = window.confirm ('Do you want passwor to include upper letter?');
    var includeNumber = window.confirm ('Do you want passwor to include numbers?');
    var includeSymbol = window.confirm ('Do you want passwor to include symbols?');

    for (var i = 0; i <= passwordLength; i++) {
        var passwordText = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    passwordText.value = password;

    return password;

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
