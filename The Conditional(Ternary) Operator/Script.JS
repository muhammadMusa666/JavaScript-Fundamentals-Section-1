// The "?" Is Essentailly An if Block,
// You Have To Use ":" Here Too
const age = 24;
age >= 18 /* <-- The Condition */ ? console.log('I Want To Buy A Gun 🔫') : // The "if" Part
    console.log('Too Young 😔'); // The "else" Part

// This Right Here Is Essentially Like Writing An if-else Statement,
// All In One Line, But Instead Of Using A Statement,
// We Use This Conditional Operator,
// And The Conditional Operator Is Also Called The "Ternary Operator",
// Because It Has 3 Parts,  Unlike The Other Operators, For Example,
// The "+" Operator Has 2 Parts: 4 + 4, But This Has 3 Parts,
// The Condition, "if" Part And "else" Part,
// Now It Is An "Operator", So It Produces A Value,
// So Its Essentially An Expression,
// So Then We Can Assign Those Values To Variables, Right?
// And It Basically, Conditionally Declare's Variables,
// And So What We Did Here Is Not Used That Much,

// Instead We Do It Like This:
const ownership = age >= 18 ? 'Bought A Gun 🔫' : 'Too Young 😔';
console.log(drink);
// Now This Whole Operator Is Now An Expression,
// And It Has A Value, So We Store It In A Variable(const),
// Now You Can See, Using An if-else Statement Will Take Much Longer,
// And You Also Have To Declare The Variable Outside First,
// As Shown Below:

let ownership2;
if (age >= 18) {
    ownership2 = "I Want To Buy A Gun 🔫";
} else {
    ownership2 = ("Too Young 😔");
}
// So You Can See How We Can Turn Such A Big Block Of Code(if-else),
// Into A Smaller Code Using The Ternary Operator,

// We Can Also Have Conditionals In A Template Literal:
console.log(`I Want To Buy A Gun 🔫 ${age >= 18 ? 'Bought A Gun 🔫' : 'Too Young 😔'}`);

// Also, This Is Not So You Should Use This Instead Of The if-else Statment,
// The if-else Statment Has its Uses, And I Showed You This,
// Aswell As Using It In A Template Literal, Where We Could Not Use if-else,
// So The Ternary Operator Really Does Help Us In Its Own Ways,



