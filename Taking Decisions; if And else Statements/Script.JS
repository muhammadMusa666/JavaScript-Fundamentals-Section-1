const age = 15;

// if else Statments Are One of the Most important things in programming,
// since we take decisions of how and what the could should run,
// you cannot progress without learning these:
if (age >= 18) {
    console.log('Mike Can Start His Driving License');
} else {
    const yearsLeft = 18 - age;
    console.log(`Mike Is Too Young, Wait ${yearsLeft} Years :)`);
}
// Just so you know, the "else" is optional, if the "if" works fine,
// then no need to put an "else" there, "else" is optional,
// And again we use it to take decisions in out code,
// it allows us more control over our code,
// This is also why its called a control structure,
// and is very useful when you have like alot of code and dont know which to run,
// so basically putting conditions, and "if" they are true then the code runs,
// and "if" the conditions are'nt true, Then It Runs Something "else", Get It? 😄

// Also, You Need To Put The Variable Inside The Round Brackets,
// It Is Also Called A Condition, And It Either Returns A true Or false Value,
// And This Is A Perfect Example, Since:
const birthYear = 1991;

let century;
if (birthYear <= 2000) { // <-- The Condition
    century = 20; // <-- If It Is True, This Block Will Be Executed
} else {
    century = 21; // <-- If Not, Then This Block Will Be Executed
}
console.log(century);

// Again "else" Is Optional, So If you Dont Use "else",
// Nothing Will Appear In The Console, if The "If" Is Not True






