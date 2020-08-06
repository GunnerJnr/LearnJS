// Changing Classes with JS

// add a multiple classes (NOTE: using bootstrap css classes)
const p0 = document.querySelector( '.add-multiple-classes' )
p0.classList.add( 'spinner-border', 'spinner-border-sm', 'text-danger' )

// add a single class (NOTE: using bootstrap css classes)
const p1 = document.querySelector( '.add-single-class' )
p1.classList.add( 'text-danger' )

// add multiple classes
const p2 = document.querySelector( '.add-multiple-classes-one' )
p2.classList.add( 'spinner-border', 'spinner-border-sm', 'text-success', 'text-uppercase' )

// add multiple classes
const p3 = document.querySelector( '.add-multiple-classes-two' )
p3.classList.add( 'text-success', 'text-uppercase' )

// remove single class
const p4 = document.querySelector( '.remove-single-class' )
p4.classList.remove( 'text-primary' )

// remove multiple classes
const p5 = document.querySelector( '.remove-multiple-classes' )
p5.classList.remove( 'text-primary', 'text-uppercase' )

// check if a class exists
const existsAlready = document.querySelector( '.check-if-i-exist' )
// if the class doesnt exist add it
if ( !existsAlready.classList.contains( 'text-danger' ) )
{
    existsAlready.classList.add( 'text-danger' )
}

// toggle classes (add/remove)
const toggleClass = document.querySelector( '.toggle-multiple-classes' )
// if class exists remove it, else add it
if ( toggleClass.classList.contains( 'text-success', 'text-uppercase' ) )
{
    toggleClass.classList.remove( 'text-success', 'text-uppercase' )
} else
{
    toggleClass.classList.add( 'text-success', 'text-uppercase' )
}

// Exercises
/*
    Add a "red" class to me!
    Remove the class, "remove" from me!
    Do I have a "blue" class?
    Do I have a "blue" class?
    Do I have a "red" class? If yes, remove it. If no, add it.
*/

// Add a "red" class to me!
const addRedClass = document.querySelector( '.add' )
addRedClass.classList.add( 'text-danger' )

// Remove the class, "remove" from me!
const removeClass = document.querySelector( '.remove' )
removeClass.classList.remove( 'remove' )

// Do I have a "blue" class?
const doIHaveABlueClass = document.querySelector( '.contains1' )
// if it has a blue class say yes, else say no
if ( doIHaveABlueClass.classList.contains( 'text-primary' ) )
{
    console.log( 'You have a blue class' )
} else
{
    console.log( 'Sorry you do not have a blue class' )
}

// Do I have a "blue" class?
const doIHaveABlueClass2 = document.querySelector( '.contains2' )
// if it has a blue class say yes, else say no
if ( doIHaveABlueClass2.classList.contains( 'text-primary' ) )
{
    console.log( 'You have a blue class' )
} else
{
    console.log( 'Sorry you do not have a blue class' )
}

// Do I have a "red" class? If yes, remove it. If no, add it.
const toggleRedClass = document.querySelector( '.toggle' )
// if class exists remove it, else add it
if ( toggleRedClass.classList.contains( 'text-danger' ) )
{
    //toggleRedClass.classList.remove( 'text-danger' )
    // use the built in toggle method
    toggleRedClass.classList.toggle( 'text-danger' )
} else
{
    //toggleRedClass.classList.add( 'text-danger' )
    // use the built in toggle method
    toggleRedClass.classList.toggle( 'text-danger' )
}

// use the built in toggle method
//toggleRedClass.classList.toggle('text-danger')