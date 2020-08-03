// zero arguments with parenthesis ()
const ten = () => 10

// call the function and log it to the console
console.log( ten() )
document.getElementById( 'parenthesis' ).innerHTML = '<li>returns:' + ' ' + ten() + '</li>'


// zero arguments substituting paranthesis () for underscore _
const twenty = _ => 20

// call the function and log it to the console
console.log( twenty() )
document.getElementById( 'underscore' ).innerHTML = '<li>returns:' + ' ' + twenty() + '</li>'


// one argument we can remove the parenthesis ()
const logger = helloArg =>
{
    // return input
    return helloArg
}

// call the function, provide 1 argument and log it to the console
console.log( logger( 'Hello' ) )
document.getElementById( 'oneArg' ).innerHTML = '<li>returns:' + ' ' + logger( 'Hello' ) + '</li> '


// one argument with parenthesis ()
const hiParenthesis = ( helloArg ) =>
{
    return helloArg
}

// call the function, provide 1 argument and log it to the console
console.log( hiParenthesis( 'Hi Parenthesis' ) )
document.getElementById( 'oneArgParenthesis' ).innerHTML = '<li>returns:' + ' ' + hiParenthesis( 'Hi Parenthesis' ) + '</li> '


// 2 arguments you MUST use the basic arrow function syntax
const twoOrMoreArgsArrow = ( arg1, arg2 ) => arg1 + arg2

// call the function, provide 2 arguments and log it to the console
console.log( twoOrMoreArgsArrow( 15, 10 ) )
document.getElementById( 'twoArgsArrow' ).innerHTML = '<li>returns:' + ' ' + twoOrMoreArgsArrow( 15, 10 ) + '</li>'


// 2 arguments you MUST use the basic arrow function syntax
const twoOrMoreArgs = ( arg1, arg2 ) =>
{
    return arg1 + arg2
}

// call the function, provide 2 arguments and log it to the console
console.log( twoOrMoreArgs( 5, 10 ) )
document.getElementById( 'twoArgs' ).innerHTML = '<li>returns:' + ' ' + twoOrMoreArgs( 5, 10 ) + '</li>'