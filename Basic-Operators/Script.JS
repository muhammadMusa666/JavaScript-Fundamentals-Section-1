// Math Operators:
const now = 2032;
const ageMusa = now - 2011;
const ageSarah = now - 2014;
console.log(ageMusa, ageSarah);

// The Variable * 2 Means It Is Multiplied By 2/The Given Number,
// Variable / 10 Means The Variable Value Is Divided By 10/The Given Number,
// And Double Asterisks Is The Power, Like 2 To The Power Of 3/The Given Number,
// So It Like 2*2*2 But Smaller
console.log(ageMusa * 2, ageMusa / 10, 2 ** 3);

const firstName = "Muhammad";
const lastName = "Musa";
console.log(firstName + '' + lastName);
// There Is Also The typeof Operator, But Thats In My Previous Repo,
// So Go And Check It Out There

// Assignment Operators:
// The Equal Sign Is Also An operator, Along With The Plus Sign, There Are Others Too.
// The "+=" Operator Adds The Given Value To The Variable, 
// As Shown Below, There Are More Listed As You Can See, But You Can Imagine What They Do
// This Is Also Why I Used let Because It Can Change The Value Of The Variable:
let x = 10 + 6; //16
console.log(x);
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;// x = x - 1
console.log(x);

// Comaprison Operators:
// The ">" And "<" Operator Do Exactly What You Might Think They Do,
// To Identify Which Variable Has A Greater Value, ">=" Or "<=" mean Greater Than Or Equal To,
// Or Less Than Or Equal To: 
console.log(ageMusa > ageSarah);// >, <, >=, <=
console.log(ageSarah >= 18);

// In Real Web Development, We Usually Store These Variables,
// And Not Just Lock Them In The Console,
// This Way Is Usually More Clean And Helps When Your Code Is Way Too Big
const isFullAge = ageSarah >= 18;

console.log(now - 2011 > now - 2014)






