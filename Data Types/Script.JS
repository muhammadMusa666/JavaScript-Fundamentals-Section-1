// Boolean Is Either "true" Or "false"
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 16);
// To Make A String, We Use Double Or Single Quotes ("" Or ''),
// Otherwise Javascript Will Confuse It As A Variable
// console.log(typeof 'Unkox');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Also The Variable Should Be Above The Other Functions Etc,
// Because It Wont Work, And Below Is An Example, Since Let Year Is Not Defined,
// It Will Appear As Undefined In The Console, But The Same Variable Is Typed
// Below And Given The Value Of 1991, And It Will Appear Differently, Since That Has A Value,
// And It Has a console.log Below It, So Again It Prints Differenlty In The Console 
let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(typeof year);

// By The Way typeof has a Bug Or Error In It, When You Use null That Is,
// When You Do So It Javascript Returns It In The console Saying Its An "object",
// However This Is Not True And Should Return As null, But It Wasnt Fixed Due To Legacy Reasons 😄
console.log(typeof null);

