
// The "switch" Statment is like the complicated version of the if-else statements,
// and it is used when we only want to do,
// is compare one value to multiple different options,
// right here, we will map an activity each day, We Can It Using Multiple "else if" blocks,
// Or We Could Use The the easier solution, using switch statements,
// Also, Notice How After The "case" then 'monday', instead of the semi colon(;),
// Its The Regualar colon(:), Remember that and dont mistake it,
// Also, We Dont Need To Use Curly Braces or "{}",
// Because everything After The Colon Is Executed,
// By The Way, The Syntax Of The switch statement is very Weird, 
// And, Dont Forget The "break"s, They're Very Important
// Because, For Example, If You Remove A "break",
// Then It WIll Keep On Executing And Stops If There's A "break" Ahead,
// Or If switch Statment Code Ends:
const day = 'Monday'; // <-- Change Variable Here, In This Case, The Day,
switch (day) {
    case 'Monday': // Also, This Right Here Is Like Writing: day === 'monday'
        console.log('Plan Vacation');
        console.log('Mini Interveiw');
        break;
    case 'Tuesday':
        console.log("Preparing To Go Camping");
        break;
    case 'Wednesday': // <-- This Is A Trick, Using 2 Cases, Whatever we write after it,
    case 'Thursday':  //  Will Be Executed On Both, In This Case, Both Days
        console.log("Write Code, And Push On Github");
        break;
    case 'Friday':
        console.log("Pray Extensively, Play Video Games");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Relax & Enjoy The Weekend 😎');
        break;
    default:
        console.log('Not A Valid Day!');
}

// The "default" is used when all theo ther cases becomes false or dont work,
// Its Like The "else" at the end of an if-else statement,
// Now That Your Done, If You Change The Value of The const,
// To One Of The Variables, which In This Case, Days,
// Then It Will Print The Stuff Of That Day,
// And If You Assign One That Is'nt There,
// I Think You Know What'll Happen, It Print The "default"


// Now, I Will Give You A Challenge, Write The Code Above,
// But In if-else statement, This Will Increase Your Concept,
// And Help Differentiating The switch And if-else Statements,
// Aswell As Where To Use Which One, So Before Scrolling Down This,
// I Suggest You Do This Challenge In A Different JavaScript File,
// Then After That, Check The Code Below ̌ ̌ ̌ ̌

























// Here You Can See, The "===" Acts As The "case"
// And The "||" Acts As The Same Thing On Both Days, I Hope You Understand 😅
if (day === 'Monday') {
    console.log('Plan Vacation');
    console.log('Mini Interveiw');
} else if (day === 'Tuesday') {
    console.log("Preparing To Go Camping");
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log("Write Code, And Push On Github");
} else if (day === 'Friday') {
    console.log("Pray Extensively, Play Video Games");
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Relax & Enjoy The Weekend 😎');
} else {
    console.log(' Not A valid Day');
}
// Now You Can Clearly See, Why Some Things Use switch Statements,
// And Why Some Use if-else Statements, Since The if-else Is Too Big,
// And To Tight/Compact To Understand It All At First Glance.

