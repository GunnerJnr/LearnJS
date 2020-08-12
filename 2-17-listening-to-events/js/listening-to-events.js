// Lesson 2.16 Listening To Events

// Listen for a button click
const button1 = document.querySelector( '.button1' )

// add classes to button for styling (bootstrap 4)
button1.classList.add( 'btn', 'btn-primary', 'text-uppercase', 'border' )

// create a set a variable to store the value of button clicks
let count = 0

// add an event listerner for a 'click' event
button1.addEventListener( 'click', function ()
{
    // increase the count by 1 each time the button is clicked
    count = count + 1

    // output to console to test click event is being fired and to test increment is working
    console.log( `Button 1 is Clicked and count = ${ count }` )

    // replace the HTML between span with the click 'count' value
    document.querySelector( '.count' ).innerHTML = `${ count }`
} )

// Listen for a button click
const button2 = document.querySelector( '.reset-count' )

// add classes to button for styling (bootstrap 4)
button2.classList.add( 'btn', 'btn-danger', 'text-uppercase', 'border' )

// add an event listerner for a 'click' event
button2.addEventListener( 'click', function ()
{
    // reset the count variable to 0
    count = 0

    // output to console to test reset is working
    console.log( `Button 2 is Clicked and the count is reset: ${ count }` )

    // Update the HTML between span with the click 'count' value back to 0
    document.querySelector( '.count' ).innerHTML = `${ count }`
} )

// change the DOM through events
const button3 = document.querySelector( '.button3' )
const text = document.querySelector( '.toggle' )

// add classes to button for styling (bootstrap 4)
button3.classList.add( 'btn', 'text-uppercase', 'mx-auto', 'd-block', 'border' )
// set default message for p tag
text.innerHTML = 'I will change to orange when you '

// add an event listerner for a 'click' event
button3.addEventListener( 'click', function ()
{
    // if the button contains the class already
    if ( button3.classList.contains( 'btn-warning' ) )
    {
        // toggle the class on/off
        button3.classList.toggle( 'btn-warning' )
        // update the p tag with the following message
        text.innerHTML = 'I will change to orange when you '
    } else
    {
        // toggle the class on/off
        button3.classList.toggle( 'btn-warning' )
        // update the p tag with the following message
        text.innerHTML = 'I will change back to default if you '
    }
    // output to console to test click event is being fired and to test increment is working
    console.log( 'Button 3 is Clicked' )
} )

// Exercises

/*
    Practice adding event listeners and getting them to do things. You’ll use them a lot when you write components. Do the following:
        Write an click event listener. Log something into the console so you know the listener works.
        Check the existence of the listener with Firefox’s devtools.
        Check the existence of the listener with Chrome Devtools.
        Add a class to the element when it is clicked. Remove a class from the element when it is clicked again
*/

// NOTE: Since I adapted the lesson code to make it my own there isn't really any need for more code to complete the exercises, as I have met what is asked in the adapted code. Having said that though I could not help myself, so below is what I came up with, not to follow the exercise instructions, more to solidify using events and event listeners and the lesson in general.

// set the initial progress bar values
let safeBarStartWidth = 40 // Extend
let freeSpaceBarStartWidth = 60 // Delete

// select and store the elements
const safeBar = document.querySelector( '.safe-bar' )
const freeSpaceBar = document.querySelector( '.free-space-bar' )
const extendButton = document.querySelector( '.extend-button' )
const freeSpaceButton = document.querySelector( '.free-space-button' )

// set its width property using our custom variables
safeBar.style.width = `${ safeBarStartWidth }%`
freeSpaceBar.style.width = `${ freeSpaceBarStartWidth }%`

// set its foint colour to something more readable
safeBar.style.color = 'yellow'
freeSpaceBar.style.color = 'blue'

// display the width length in each bar
safeBar.innerHTML = `${ safeBar.style.width }`
freeSpaceBar.innerHTML = `${ freeSpaceBar.style.width }`

// add multiple classes to our elements
safeBar.classList.add( 'progress-bar', 'bg-success', 'progress-bar-striped', 'progress-bar-animated', 'border' )
freeSpaceBar.classList.add( 'progress-bar', 'bg-light', 'progress-bar-striped', 'progress-bar-animated', 'border' )
extendButton.classList.add( 'btn', 'btn-success', 'mx-auto', 'd-block', 'text-uppercase', 'border' )
freeSpaceButton.classList.add( 'btn', 'btn-danger', 'mx-auto', 'd-block', 'text-uppercase', 'border' )

// add an event listerner for a 'click' event
extendButton.addEventListener( 'click', function ()
{
    // if the used space bar width is not equal to 100% and the free space bar with is not equal to zero
    if ( safeBarStartWidth !== 100 && freeSpaceBarStartWidth !== 0 )
    {
        // increment the used space bar by 10 each click 
        safeBar.style = `width:${ safeBarStartWidth += 10 }%`
        // reset the colour property updating the amount
        safeBar.style.color = 'yellow'

        // decrement the free space bar by 10 each click 
        freeSpaceBar.style = `width:${ freeSpaceBarStartWidth -= 10 }%`
        // reset the colour property updating the amount
        freeSpaceBar.style.color = 'blue'

        // update the width length in each bar
        safeBar.innerHTML = `${ safeBar.style.width }`
        freeSpaceBar.innerHTML = `${ freeSpaceBar.style.width }`
    }

    // output to console to test click event is being fired and to test increment is working
    console.log( 'Extend Button is Clicked' )
} )

// add an event listerner for a 'click' event
freeSpaceButton.addEventListener( 'click', function ()
{
    if ( freeSpaceBarStartWidth != 100 && safeBarStartWidth != 0 )
    {
        // decrement the used space bar by 10 each click 
        safeBar.style = `width:${ safeBarStartWidth -= 10 }%`
        // reset the colour property updating the amount
        safeBar.style.color = 'yellow'

        // increment the free space bar by 10 each click 
        freeSpaceBar.style = `width:${ freeSpaceBarStartWidth += 10 }%`
        // reset the colour property updating the amount
        freeSpaceBar.style.color = 'blue'

        // display the width length in each bar
        safeBar.innerHTML = `${ safeBar.style.width }`
        freeSpaceBar.innerHTML = `${ freeSpaceBar.style.width }`
    }

    // output to console to test click event is being fired and to test increment is working
    console.log( 'Delete Button is Clicked' )
} )