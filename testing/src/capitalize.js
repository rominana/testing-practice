// Task 4 - Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
function capitalizeString(string) {
if (string[0] === string[0].toLowerCase()) {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    string = string.join('');
};
    return string;
};
module.exports = capitalizeString;