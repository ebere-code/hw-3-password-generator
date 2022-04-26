// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


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


