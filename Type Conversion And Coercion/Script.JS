// Type Conversion:
// In The Console, When We Print A Number, It Appears Purple-ish,
// And When We Print A String, It Appears White.
// Now When you Execute the Following Code,
// You Can See In The Console That It Shows The InputYear And 18 COMBINED/CONVERTED,
// Or Still A String, NOT ADDED,
// So If You Want To Perform This Calculation,
// You Will Have To Use "Number" There 88
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); <-- Not This ✖️
console.log(Number(inputYear) + 18); // <-- Like This ✔️

// Now What If We Try To Convert Something Into A Number Which Is'nt A Number?
// It Will Print "NaN" In The Console, Which Stands For "Not a Number",
// This Happens When An Operation That Involves Numbers, Fails To Produce A New Number,
// So It Means Basically "Invalid Number", Not Really "Not a Number",
// Now Let Me Show You How, If We Try To Use typeof, You Will See In The Console,
// That Javascript Says That NaN Is A Number, Which Is A Bit Confusing Yet Funny,
// Still, NaN Does'nt Mean "Not a Number", It More So Mean "Invalid Number".
console.log(Number('Michael'));
console.log(typeof NaN);

// Now Lets Start Doing Its Opposite, Lets See If You Can Make Sense Of This,
// By The Way, This Is Not As Important But I Wanted To Mention It:
console.log(String(23), 23);
// Also, JavaScript Can Only Convert To 3 Types, To A Number, String, Or Boolean.

// Type Coercion:
console.log('I Am' + 23 + 'Years Old'); // <-- Thanks To Type Coercion, Writing This Would Be Same As
console.log('I Am' + '23' + 'Years Old'); // <-- Writing This
// This Is Because The Plus Operator, Or "+" Will Convert Numbers To Strings,
// And The Same Happens In Template Literals,
// It Also Takes All The Number Values And Converts Them Into Strings

// If JavaScript Did'nt Have Type Coercion, Then We Would Have To Do It Like This:
console.log('I Am' + String(23) + 'Years Old');

// By The Way, Not All Operators Use Type Coercion To String,
// As Shown, When This Runs, The Answer Is 10 In Purple Color, So Its A Number:
console.log('23' - '10' - 3);
// Which Means That JavaScript Converted Strings To Numbers,
// Well Thats Because The Minus Operator, Or "-" Triggers The Opposite Conversion

// Now The Asterisk, Or In This Case The Multiplier Operator/"*",
// Also Converts Strings To Numbers, And The Same Is True For Division, Or "/":
console.log('23' * '2');
console.log('23' / '2');

// Now Lets See If Actually Understand This, Guess The Following Correctly 😄,
// Take A Moment To Think, What Will This Be?
let n = '1' + 1;
n = n - 1;
console.log(n);
// The Answer Here Is 10, Which Might Be Confusing, But Makes Sense,
// Since The '1' + 1, Means The String Of '11',
// Because The "+" Operator Turns Numbers To Strings, Then - 1,
// Which Turns Strings To Numbers, And So The Answer IS 10!





