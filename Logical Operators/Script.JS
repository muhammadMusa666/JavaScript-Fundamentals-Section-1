// "And", "Or", and "Not" Logical Operators
// The And Operator Is Used Like This "&&",
// And It Works When All the Variables Are true:
const hasDriversLicense = true; // A
const hasGoodVision = true; // B // <-- If false, The Entire Thing Is false, And Vice Versa,

console.log(hasDriversLicense && hasGoodVision);
// If You Change One Of Them To false,
// The Entire Thing Will Change To false

// Now The "Or" Operator, This Is Kind Of The Opposite,
// Because, It Only Needs One Variable To Be true,
// In Order To Make The Whole Thing True:
console.log(hasDriversLicense || hasGoodVision);

// Now The "Not" Operator Is Used Like "!",
// And If You Have Been Following Along, Now It Probably Makes Sense
// That Why Not Equal Or Unequal Operator(!=/!==), Had The "!"
// And The 'Not' Or "!" Operator Bascially Inverts One Of The Values:
console.log(!hasDriversLicense);

// Now That You Know How These Work, We Will Now Use These Variables,
// To Take Decision, So For Example, Let's Say That Either The Person,
// Should Drive Or Not, So For Example The Person's Name Is John,
// Oh And If You Did'nt Know, These Are Boolean Logical Operators,
// And We Can Use Them To Model Complex Situations,
// So We Will Create A New Boolean Variable,
if (hasDriversLicense && hasGoodVision) {
    console.log('John Is Able To Drive!');
} else {
    console.log('Someone Else Should Drive...');
}
// Now Here, If You Use "&&", It Will Only Execute The if Block,
// If Both Of Them Are True, Which In This Case Is Not True,
// And So The else Block Will Execute Because One Of The Variable Is false,
// And If You Change It To true, The if Block Will Execute Because Both Variables Are true

// Right Here, Is Another Example, If All Of Them Are true,
// Then It Is true, If Not Then Its false, And Again,
// This Works ONLY IF We Are Using the "And" Operator, Or "&&"
const isTired = false; // C // <-- Depending On The Operator, You Should Change It Accordingly, In This Case, It Should Be false
console.log(hasDriversLicense && hasGoodVision && isTired);

// Now Lets Make Another Condition, We Want John,
// To Have A Drivers License, Good Vision, And Not Be Tired, Right?
// So Let's Just Copy The Condition Above,
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('John Is Able To Drive!');
} else {
    console.log('Someone Else Should Drive...');
}
// Here, We Changed The isTired Variable To Not, Using "!"
// But Since The Variable Is true, The else Block Will Execute
// To Fix This, The isTired Variable Will Be Changed To false,
// Then The if Block Will Execute








