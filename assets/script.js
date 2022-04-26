// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// var incSymbols = symbols.checked;

function generatePassword() {
    var passwordValue = "";
    var characters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      // need to add quotes 
      symbols: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
      numbers: "0123456789"
    }
    var correctFormat = false;

    while (!correctFormat) {
        // Checks to make sure the password is the correct length 
        var passwordLength = window.prompt("Please enter the length of your password: ");
        if (Math.floor(passwordLength) < 8) {
            window.alert("Password must be equal to or longer than 8 characters. Please try again.");
        } else if (Math.floor(passwordLength) > 128) {
            window.alert("Password must be equal to or smaller than 128 characters. Please try again.");
        } else {
            correctFormat=true;

            var includeLowercase = window.confirm ('Do you want password to include lowercase letter?');
            var includeUppercase = window.confirm ('Do you want password to include upper letter?');
            var includeNumber = window.confirm ('Do you want password to include numbers?');
            var includeSymbol = window.confirm ('Do you want password to include symbols?');

            if (!(includeLowercase || includeUppercase || includeNumber || includeSymbol)) {
                window.alert("Please choose at least one criteria for your password and try again.");
            } else {
                //starts building password string 
                if (includeNumber) {
                    passwordValue += characters.numbers;
                }
                if (includeLowercase) {
                    passwordValue += characters.lowercase;
                }
                if (includeUppercase) {
                    passwordValue += characters.uppercase;
                }
                if (includeSymbol) {
                    passwordValue += characters.symbols;
                    // Generates the random password 
                }
                var password = generateString(passwordValue, passwordLength);
                var allPresent = {includeNumber, includeLowercase, includeUppercase, includeSymbol};
            
                // Checks to make sure that all user requirements are present in the randomized password 
                while (!checkIfAllPresent(allPresent, password, characters)) {
                    password = generateString(passwordValue, passwordLength);
                }
                
                return password;
                
            }
        }
    }
}

function checkIfAllPresent(allPresent, password, characters) {
    var afterCheckPresent = true;
    var checkArray = {includeNumber: false, includeLowercase: false, includeUppercase: false, includeSymbol: false};
  
    // Check if numbers are present in the password
    if (allPresent.includeNumber) {
      for (var i=0; i<password.length; i++) {
        if (characters.numbers.includes(password[i])) {
          checkArray.includeNumber = true;
        }
      }
    }
  
    // Check if lowercase are present in the password
    if (allPresent.includeLowercase) {
      for (var i=0; i<password.length; i++) {
        if (characters.lowercase.includes(password[i])) {
          checkArray.includeLowercase = true;
        }
      }
    }
  
    // Check if uppercase are present in the password
    if (allPresent.includeUppercase) {
      for (var i=0; i<password.length; i++) {
        if (characters.uppercase.includes(password[i])) {
          checkArray.includeUppercase = true;
        }
      }
    }
  
    // Check if uppercase are present in the password
    if (allPresent.includeSymbol) {
      for (var i=0; i<password.length; i++) {
        if (characters.symbols.includes(password[i])) {
          checkArray.includeSymbol = true;
        }
      }
    }
      
    // This checks the two boolean maps
    var i=0;
    while (afterCheckPresent && i<Object.values(allPresent).length) {
      if (Object.values(allPresent)[i] !== Object.values(checkArray)[i]) {
        afterCheckPresent = false;
      }
      i++;
    }
  
    return afterCheckPresent;
  }
  
  // Generates the password string using random integers
  function generateString(criteria, passwordLength) {
    var password="";
    for (var i=0; i<passwordLength; i++) {
      var randomInt = Math.floor(Math.random() * criteria.length);
      password += criteria[randomInt];
    }
    return password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



//Set get password character from user
// if(numCharacters <8 || numCharacters >128) {
//     return alert("Please enter a number from 8-128 characters.")
//   } else {
//     passwordText.innerText = generatePassword(numCharacters, incLowercase, incUppercase, incNumbers, incSymbols);}
  
//   });







// //generate functions for each character type string
// var getRandomLower = function (){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };
  
// var getRandomUpper = function (){
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };
// console.log (getRandomUpper);
  
// var getRandomNumber = function (){
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// };
  
// var getRandomSymbol = function (){
//     var text= '';
//     const symbol=["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
//     text+= symbol.charAt[Math.floor(Math.random() * symbol.length)];
//     console.log (text);
//     return text;
// };


// console.log (password.length);

// includeLowercase = false;
// includeUppercase = false;
// includeNumber = false;
// includeSymbol = false;

// if (passwordLength = null) {



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
