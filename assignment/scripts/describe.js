// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// Establish a name variable as Dane
// Conditional to check if name is equal to mary, if true console log 'hi mary'
// if not true console log 'how do you do?'
// since name = Dane and not Mary the else statement will be logged reading 'how do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Establish code variable as 123
// Conditional to check if code is equal to 123 and then to give secret the value of 'super' and multiply code by 2
// Other Conditional checks if code is now greater than 25 and then to give secret the value of 'duper'
// console logs secret which will now read super since code has a value of 246 and not above 250

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Establish variables isStudent as boolean true, age as 24, and zip as 55407
// Conditionals to check if isStudent equals true and if zip is greater than 80000 then console log `You're a student on the West Coast!`
// Both are not true at once so it will not go through
// else if to check if isStudent is false and if age is under 30 then console log 'What are your hobbies?'
// isStudent is true so it won't fit the false conditional for isStudent
// else if to check isStudent is true then console log 'Welcome to Prime!'
// since this is the only conditional so far to match it will run
// last else statement in case none of the conditionals match

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//switch colorOne and colorTwo as they are set to the wrong color
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//both color variables should be set to purple, only colorOne is
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// Could be set to a let instead of const, but not a huge issue
const time = 4;

// This is an or statement '||' when it should be an and statement '&&'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// technically says minAge less than or equal to age, should be age >= minAge
if(minAge <= age) {
// the console logs should be flipped so that if the conditional is true it returns the correct statement
  console.log('no entry');
} else {
  console.log('enter');
}
*/
