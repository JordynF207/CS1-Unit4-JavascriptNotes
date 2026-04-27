// This  is a SINGLE LINE COMMENT (note)
/* This is a MLTI LINE COMMENT
Code below is an example JS STATEMENT(instruction/command)
Every statement ends in a SEMICOLON
*/
console.log("Welcome to javascript!");

// VARIABLES are named storage containers for data

// DECLARE a new varibale (make space)
let username;

// ASSIGN a value to an exsiting variable 
username = "jordyn.f";

// DECLARE + ASSIGN a new varible in one line
let pokemon = "pikachu";

// See the value of a varibale 
console.log(username);
console.log(pokemon);

// Create a varible that holds a NUMBER
let luckyNum = 17; // Numbers don't need quotes!
console.log(luckyNum);

// Change the value stored in a variable
luckyNum = 19;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 17;
console.log(age);
let ageInTen = age+10;
console.log(ageInTen);
let ageDogYears = age/7;
console.log(ageDogYears);
let crimsonHumanYears = 3 * 7;
console.log(crimsonHumanYears);

// PEMDAS applies when you have multipule operators
let score = 0;
score = score + 8 - 9 / 21 * (4 + 6);
console.log(score);

// Combine 2 "literal" strings (CONCATENATION)
console.log("My age is " + "age");
// OR concatenate a literal string with a VARIBALE 
console.log("My age is " + age);
console.log("My age in 10 year will be " + ageInTen);
console.log("My age in dog years is " + ageDogYears);

// Can also concatenate while making variables
let user = "jordyn";
let message = "Welcome " + user + "!"
console.log(message)

/* FUNCTIONS:
   Reuseable sets of code statements that preform a specific tast/process/routine 
*/
// console.log is a built in fuction we use 
console.log("I just used a function");

// DEFINE (create) your own function
function prepareForSleep() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Put on PJs.");
    console.log("2. Brush teeth.")
    console.log("3. Turn the lights off.")
}
// CALL (use) our function 
prepareForSleep();
prepareForSleep(); // can call it again! 

/* Selection (CONDITIONALS)
   a BOOLEAN EXPRESSION is like a question that has a boolean (true/false) answer
 */

console.log(4 > 5);
console.log("jordyn" > "ms.walter");
console.log("Is 10 less than 2?")
console.log(10 < 2); //false

// Check for EQUALITY using == or ===
console.log(17 == 19);
console.log(5 != 3); // true, NOT equal 

// Strings are compared by dictionary order
console.log("p" > "i"); // p comes later then i
console.log("Jordyn" == "jordyn"); 

// Can use comparison operators btwn VARIABLES & values
let password = "abc123!";
console.log("uirhekf63" == password);

// Expressions are used in IF STATEMENTS 
// to make DECISIONS about which code to run
let myAge = 16; 

if (myAge >= 17) {
    // code in here only runs if TRUE
    console.log("you are old enough to get a NY license");
}

else if (myAge == 16) {
    console.log("you can get a learners permit!");

}

// ELSE block handles the "otherwis..." case 
else {
    console.log("not old enough :(");
}