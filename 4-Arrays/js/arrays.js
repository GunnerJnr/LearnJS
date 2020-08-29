// 4.1 Introduction To Arrays & 4.2 Array Methods
let people = [
    'Dave',
    'Clare',
    'Celia-rose',
    'Rebecca',
    'Edna',
    'Percy',
]

console.log( people )

console.log( '--------------------------------------------------' )

console.log( people[ 0 ], people[ 1 ], people[ 2 ], people[ 3 ], people[ 4 ], people[ 5 ] )

console.log( '--------------------------------------------------' )

console.log( people.indexOf( 'Celia-rose' ) )

console.log( '--------------------------------------------------' )

people.unshift( 'Andrew', 'Gunner' )
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( 0, 0, 'Antony', 'Thomas' )
console.log( people )

console.log( '--------------------------------------------------' )

people.push( 'Phillip', 'Greg' )
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( people.length, 0, 'George', 'Adam' )
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( 5, 0, 'Ray', 'Penelope' )
console.log( people )

console.log( '--------------------------------------------------' )

people.shift()
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( 4, 2 )
console.log( people )

console.log( '--------------------------------------------------' )

people.pop()
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( 8, 2 )
console.log( people )

console.log( '--------------------------------------------------' )

people.splice( 8, 2 )
console.log( people )

console.log( '--------------------------------------------------' )

// 4.3 For Loops

// Loop through the numbers and console.log each number within
const numbers = [ 1, 12, 56, 84, 31, 9, 27, 2016, 2012, 29, 100 ]
for ( i = 0; i < numbers.length; i++ )
{
    console.log( 'numbers[' + numbers[ i ] + ']' )
}

console.log( '--------------------------------------------------' )

// Loop through the numbers. If the numbers are greater than 5, console.log them
const numbersGreaterThanFive = [ 1, 12, 56, 4, 3, 9, 27, 26, 2, 29, 100 ]
for ( i = 0; i < numbers.length; i++ )
{
    if ( numbersGreaterThanFive[ i ] > 5 )
    {
        console.log( 'numbers[' + numbersGreaterThanFive[ i ] + ']' )
    }
}

console.log( '--------------------------------------------------' )

// Create a new array. Add all numbers that are greater than 10 into this new array. (Hint: You have to loop through the numbers array first)
const numbersArray = [ 1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6 ]
// new array
const newNumbersArray = []
for ( num of numbersArray )
{
    // if the number in the array is greater than 10
    if ( num > 10 )
    {
        // add it to the new array
        newNumbersArray.push( num )
    }
}

for ( num of numbersArray )
{
    console.log( 'numbers[' + num + ']' )
}

console.log( '--------------------------------------------------' )

for ( newNum of newNumbersArray )
{
    console.log( 'numbers[' + newNum + ']' )
}

console.log( '--------------------------------------------------' )

// Create a new array. Multiply all numbers by 5 and put them into the new array. (Hint: You have to loop through the numbers array first).
const numbersArray2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const anotherNewNumbersArray = []
for ( num2 of numbersArray2 )
{
    // multiple the numbers by 5 and add to the new array
    anotherNewNumbersArray.push( num2 * 5 )
}

for ( anotherNewNum of anotherNewNumbersArray )
{
    console.log( 'numbers[' + anotherNewNum + ']' )
}

console.log( '--------------------------------------------------' )

// 4.4 ForEach Loops

// Practice using forEach through an array of people (given below).
const people84 = [
    { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
    { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
    { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
    { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
    { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
    { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
    { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
    { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
    { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
    { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
    { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
    { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
    { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
    { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
    { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
]

// console.log the first name of each person in the array.
people84.forEach( thePeople =>
{
    console.log( thePeople.firstName )
} )

console.log( '--------------------------------------------------' )

// Make a second array that contains only the first name of each person.
const firstNames = []
people84.forEach( thePeople =>
{
    firstNames.push( thePeople.firstName )
} )

firstNames.forEach( thePeople2 =>
{
    console.log( thePeople2 )
} )

console.log( '--------------------------------------------------' )

// Make a third array that contains people that have died after 1950.
const diedafter1950 = []
people84.forEach( thePeople =>
{
    if ( thePeople.yearOfDeath > 1950 )
    {
        diedafter1950.push( thePeople )
    }
} )

diedafter1950.forEach( thePeople3 =>
{
    console.log( thePeople3.firstName )
} )

console.log( '--------------------------------------------------' )

// Find index of Charles Darwin in the array.
let darwinsIndexNo = -1
people84.forEach( ( thePeople, indexNo ) =>
{
    if ( thePeople.firstName === 'Charles' && thePeople.lastName === 'Darwin' )
    {
        darwinsIndexNo = indexNo
        console.log( darwinsIndexNo )
    }
} )

console.log( '--------------------------------------------------' )