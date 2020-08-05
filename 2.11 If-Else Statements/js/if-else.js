// how the basic if/else statement (control statement) flow looks
const condition = true
if ( condition )
{
    // Do something!
} else
{
    // Do something else!
}

// EXERCISES

// declare some variables for the exercises
const james = 22
const valerie = 25
const kenneth = 27
const me = 36

// Make an if/else statement to check if you are younger than James.
if ( me < james )
{
    // log a message to the console if condition is true
    console.log( `You are younger than James because you are ${ me } and James is ${ james }.` )
}
// Make an else if statement within your if/else to check if you are older than Valerie.
else if ( me > valerie )
{
    // log a message to the console if condition is true
    console.log( `You are older than Valerie because you are ${ me } and Valerie is ${ valerie }.` )
}
// Make another else if statement to check if you’re as old as Kenneth.
else if ( me === kenneth )
{
    // log a message to the console if condition is true
    console.log( `You are the same age as Kenneth because you are ${ me } and Kenneth is also ${ kenneth }.` )
} else
{
    // log a message to the console if condition is false
    console.log( `You are older than James, because James is ${ james } and you are ${ me }!` )
    console.log( `You are younger than Valerie because you are ${ me } and Valerie is ${ valerie }.` )
    console.log( `You are older than Kenneth, because you are ${ me } and Kenneth is ${ kenneth }.` )
}

// Answer the rest of the questions below with reference to the following code:
const someValue = ['one', 'two', 'three'] // adjust with each value to find out YES or NO

if ( someValue )
{
    // Executes if true
    console.log('YES')
} else
{
    // Executes if false
    console.log('NO')
}

/*
Would the if statement above execute:

If someValue is false? NO
If someValue is true? YES
If someValue is null? NO
If someValue is undefined? NO
If someValue is 0? NO
If someValue is -1? YES
If someValue is ''? NO
If someValue is 'has a value!'? YES
If someValue is {}? YES
If someValue is { isHavingFun: true }? YES
If someValue is []? YES
If someValue is ['one', 'two', 'three']? YES
*/