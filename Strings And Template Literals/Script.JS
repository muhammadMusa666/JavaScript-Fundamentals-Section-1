// This is A Subtopic, Called Operator Precedence, The Actual Topic
// About Strings And Template Literals Start After This:

// Check The Precedence Table From MDN(Mozilla Documentation Network),
// They Have Other Info About JavaScript Too, So If You Don't Understand This,
// I Recommend You Go There, Anyways As An Example,
// JavaScript Will First Start With The "+" Operator, Then The "</>" Or "<=/>=" Operator,
// Because It Makes Sense, Like This It Executes Other Operators Differently,
// So Again Visit MDN For More Info About This
const now = 2032;
const ageMusa = now - 2011;
const ageSarah = now - 2014;

console.log(now - 2011 > now - 2014);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMusa + ageSarah) / 2;
console.log(ageMusa, ageSarah);

// Strings And Template Literals:

const firstName = "James";
const job = "Janitor";
const birthYear = 1996;
const year = 2032;


// A Template Literal Can Assemble Pieces Into One Final String, As Shown Below,
// This Is How You Can Use Them To Create A Sentence And Other Things Is JS,
// But This Way Is Not The Best Way To Do So, And Is Not Recommended:
const james = "i'm " + firstName + ', a ' + (year -
    birthYear) + ' year old ' + job;
console.log(james);

// This Is The Recommended Way To Use Template Literals,
// Even If It Looks Confusing, Well This Way Uses No "+" Signs,
// And No Repeating Of Air Quotes And Instead Uses Backticks,
// Its Quicker To Type, And So Is How You Should Create Template iterals:
const jamesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jamesNew);

// Also You Can Use Backticks In Any Irregular String,
// And Not Only In The Strings Where We Put Placeholders:
console.log(`Just A Regular String`);

// Template Literals Are Also Used In Multiline Strings,
// But Before ES6(The Biggest JavaScript Update In 2015),
// Making multiline Strings Was Really Cumbersome,
// And It Works Because Of A Bug Too! As Shown:
console.log('String With \n\
Multiple \n\
Lines');

// At That Time You Would Have To Type These "\n\", Which Meant "New Line",
// And You Can Probably Imagin How Weird It Was, But After ES6,
// It Was Alot Easier, You Also Have To Use Backticks Now, As Shown:
console.log(`String With
Multiple
Lines
Using
Backticks`);