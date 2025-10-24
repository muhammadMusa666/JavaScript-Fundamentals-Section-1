// How "===" Works;
// The "===" Operator, Represents the 'Strict Equality Operator',
// Which Performs a Comparison Between 2 Values,
// Returning True Only If The Value Is Same,
// So Don't Confuse The Normal "=" With "===",
// It Also Does'nt Do Type Coercion
const age = 18;
if (age === 18) console.log("You Just Became An Adult :D (strict)");

// Like The "===", There Is Also "==",
// It Is Also Called The 'Loose Equality Operator',
// Which Uses Type Coercion,
if (age == 18) console.log("You Just Became An Adult :D (loose)");
// So Now If You Change The Variable's Value Type To String,
// It Will Still Work, Unlike The "===",
// Here Is A Tip, If You Want A Clean Code ,
// With Mostly No Bugs, Then Avoid The "==" Operator
// So Even If You Want To Use It One Day,
// Then Its Better To Do It Manually Instead Of The "==" 😅

// Now, I Want To Show You Something,
// There Is A Very Simple Way Of Getting A Value From Any Webpage,
// We Can Do So By Using The "prompt" function,
// Don't Worry About Functions, We Will Learn Them In The Future,
// Here, If We Use The "==", It Will Be True Because,
// The "==" Does Type Coercion, But Now, Like I Said,
// We Should Always Use "===", But That Does'nt Do Type Coercion, Right?
// Well Because Of That, As I said Before,
// That Its Better To Manually Change The Types,
// We Will Manually Change The String In The Prompt,
// Using The "Number" function, As Shown:
const favorite = Number(prompt("What Is Your Favorite Number?")); // <-- Number function Here
console.log(favorite);
console.log(typeof favorite);
if (favorite === 16) { // <-- Changed From "==" To "==="
    console.log('Cool! 16 Is A Nice Number!');
} else if (favorite === 8) {
    console.log('8 Is Also A Cool Number!');
} else if (favorite === 32) {
    console.log("32 Is Also A Great Number!");
} else {
    console.log('Number Is Not 8, 16, Or 32....');
}
// You Will Definitly Be Thinking, "What's That else if?",
// Well, Let Me Explain, else if Is Like An Extentsion Of The if-else Statements,
// It Can Be Used To Make More Options, Conditions, Or Ways To Run Your Code,
// So If The First Block/Condition Does'nt Work, Then The Next Will Run, And So On,
// Also, For Example, You Can Try To Modify The if-else Statements And Add More Conditions,
// There Is No Limit, You Can Add 10, 100, or 1000 And It Will Work,

// There Is 2 Last Equal Operator You Should Know,
// Which Is The "!==" Operator, It Is The Opposite Of "===",
// And The "!=" Operator, Which Is The Opposite Of "==",
// And I Think You Can Imagine, What They Do,
// If Not Somehow, The "!==" Is The 'Strict Inequality Operator',
// And "!=" Is Called The 'Inequality Operator',
// 'Loose Equal Operator', Or 'No Equal Operator'
// Let's Test Them, As Shown:
if (favorite !== 67) console.log('Why Not 67');




