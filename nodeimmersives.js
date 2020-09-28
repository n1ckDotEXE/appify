let firstName = process.argv[2];
let lastName = process.argv[3];

console.log('Hello there, ' + firstName + ' ' + lastName + '!');

console.log('We used the .toUpperCase() to convert your input of ' + firstName + ' ' + lastName + ' to ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase() + '.');

console.log('Using indices (or to annoy Colin, indexes), we got the first initial of your first name and then found the space between your first and last name and used the first character after to get your last initial.' + firstName[0] + '. ' + lastName[lastName.indexOf(' ') + 1] + '.');

console.log(firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com');

console.log('We used the toLowerCase to print out the email address');



///////// Work in Progress ///////////////////////////
// nameValidator(firstName, lastName);
// function nameValidator(firstN, lastN) {
//     if (firstName === '' || lastName === '' ){
//         console.log('Hello there, ' + firstName + ' ' + lastName + '!');
//     } else if (firstN !== NaN || lastN !== NaN) {
//         console.log("Please enter your name!")
//     } else {
// >>>>>>>> Assignment Code Here <<<<<<<<< //
//     }
// }