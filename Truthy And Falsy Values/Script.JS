// 5 Falsy Values: 0, "" or '', undefined, null, NaN

// You Mostly Never Use This Boolean Function Here,
// I Just Made This To Show You How Truthy And Falsy Values Work
// So In Practice, The Conversion To Boolean Is Always Implicit, NOT Explicit,
// Or In Other Words, Its Always Type Coercion,
// That JavaScript Does Automatically Behind The Scenes,
console.log(Boolean(0)); // <-- Will Be Converted To false
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('James'));
console.log(Boolean({}));

// But Now, When Does Javascript, Do Type Coercion To Booleans?
// Well It Happens In Two Scenarios, First, When Using Logical Operators,
// Second, In A Logical Context, Like In The Condition Of An if-else Statement,
// We Will Talk About Logical Operators In The Future,
// So Lets Now Go Back To The if-else Statement,
// See How Type Coercion Works In The if-else Condition 
const money = 0; // <-- Will Also Be Convert To false, If We Change, Will Be True
if (money) {
    console.log("Don't Spend It All");
} else {
    console.log("You Should Get A Job!");
}

// Now Why Did The else Part Get Executed?,
// Well We Know That The "money" Variable Is A Number, Which Is Zero 0,
// But In The Logical Context Of An If Else Statment Condition,
// Meaning that in the Rounded Braces/Brackets After The "if" Statment,
// JavaScript Will Try To Coerce Any Value Into A Boolean,
// So, Whatever We Put There, If Its Not A Boolean,
// Then JavaScript Will Try To Convert It Into A Boolean,
// And That Happens Using The Truthy And Falsy Value Rules,
// But Zero, Which Is The Value Of The Variable,
// Is A Falsy Value, Right? And So Here In This Condition,
// The 0 Number Will Be Converted To false,
// If You Change The Value Though, It Will Be true

// Now Here, Height Is undefined, Because It Has No Value,
// And As You Know, Undefined Is A Fasly Value,
// But Again If You Assign It Any Value, It Will Be true
let height;
if (height) {
    console.log("YAY!");
} else {
    console.log("Height Is Undefined");
}