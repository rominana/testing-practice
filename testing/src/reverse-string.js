//Task 2 - Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
function reverseString(string) {
    let newString = string.split('');
    let reversedString = [];
    for (let i = newString.length - 1; i >= 0; i--) {
        reversedString.push(newString[i]);
    }
    newString = reversedString.join('');
    return newString;
};
module.exports = reverseString;