// Lesson 2.18 - Callbacks

const buttonOne = document.querySelector( '.button' )
buttonOne.classList.add( 'btn', 'btn-success', 'mx-auto', 'd-block', 'text-uppercase', 'border' )

// an example of a callback in use is the event listener
buttonOne.addEventListener( 'click', function ()
{
    console.clear()
    // do something
    console.log( 'Do something' )
} )

// an event listener can be re-written as follows 
function callback ()
{
    // do something
    console.log( 'Do something else' )
}
buttonOne.addEventListener( 'click', callback )

// an example of a callback in use is the event listener
buttonOne.addEventListener( 'click', function ()
{
    // we want to toggle the class on and off when the button is clicked
    buttonOne.classList.toggle( 'btn-danger' )
    // if thew button contains this class
    if ( buttonOne.classList.contains( 'btn-danger' ) )
    {
        // log a message to the console
        console.log( 'Red class is added' )
        // otherwise
    } else
    {
        // log a message to the console
        console.log( 'Red class is removed' )
    }
} )

// an example of a callback in use is the event listener
buttonOne.addEventListener( 'click', function ()
{
    // log a message to the console
    console.log( 'Hello world!' )
} )