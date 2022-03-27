// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var isEqualTakeTwo = function (x, y) {
    if (x === y) {
      console.log('They are equal in type and value');
    } else if (x == y) {
      console.log('They are equal in value');
    } else {
      console.log('They are not equal');
    }
    return;
};

var myArray = ['a', 'b', 'c'];
var myArray2 = ['f', 'e']
myArray.push.apply(myArray, myArray2);
console.log(myArray)