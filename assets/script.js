// Assignment Code
var generateBtn = document.querySelector("#generate");

//assign global variable
var length = document.getElementById('numCharacters');
var lowercase = document.getElementById('incLowercase');
var uppercase = document.getElementById('incUppercase');
var numbers = document.getElementById('incNumbers');
var symbols = document.getElementById('incSymbols');
var form = document.getElementById('passwordForm');
var passwordText = document.getElementById('password'); 

// var password = document.getElementById('password');

const randomFunct = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Add event listener to generate button 
generateBtn.addEventListener("click", () => {

//generate functions for each character type string
var getRandomLower = function (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
  
var getRandomUpper = function (){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
console.log (getRandomUpper);
  
var getRandomNumber = function (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
  
var getRandomSymbol = function (){
    var text= '';
    const symbol=["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    text+= symbol.charAt[Math.floor(Math.random() * symbol.length)];
    console.log (text);
    return text;
};

var passwordLength = window.prompt ('How many characters long would you like your password to be?');
var expression1 = (passwordLength < 8);
var expression2 = (passwordLength > 128);

// console.log (password.length);

// includeLowercase = false;
// includeUppercase = false;
// includeNumber = false;
// includeSymbol = false;

// if (passwordLength = null) {
//     return;
// }
if (expression1 || expression2) 
{
    passwordLength = window.prompt ('Please Choose a character count between 8 and 128');
};
var includeLowercase = window.confirm ('Do you want password to include lowercase letter?');
var includeUppercase = window.confirm ('Do you want password to include upper letter?');
var includeNumber = window.confirm ('Do you want password to include numbers?');
var includeSymbol = window.confirm ('Do you want password to include symbols?');

var passphrase = '';
// passphrase.push.apply(passphrase, getRandomLower);
// myArray.push.apply(

if (includeLowercase) {
   passphrase = passphrase.concat(getRandomLower); 
}

if (includeUppercase) {
    passphrase = passphrase.concat(getRandomUpper); 
}

if (includeNumber) {
    passphrase = passphrase.concat(getRandomNumber); 
}

if (includeSymbol) {
    passphrase = passphrase.concat(getRandomSymbol); 
}

console.log (passphrase);

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    
    
    


    // for (var i = 0; i <= passwordLength; i++) {
    //     var passwordText = Math.floor(Math.random() * passwordLength);
    //     password += chars.substring(randomNumber, randomNumber +1);
    // }
    // var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // var string_length = 8;
    var passwordText = '';
    for (var i=0; i<passwordLength; i++) {
        var rnum = Math.floor(Math.random() * passphrase.length);
        passwordText += passphrase.substring(rnum,rnum+1);
    }

    // if (window.confirm == "true")

    passwordText.value = password;

    return password;

    // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
