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
console.log( people[ 0 ], people[ 1 ], people[ 2 ], people[ 3 ], people[ 4 ], people[ 5 ] )
console.log( people.indexOf( 'Celia-rose' ) )
people.unshift( 'Andrew', 'Gunner' )
console.log( people )
people.splice( 0, 0, 'Antony', 'Thomas' )
console.log( people )
people.push( 'Phillip', 'Greg' )
console.log( people )
people.splice( people.length, 0, 'George', 'Adam' )
console.log( people )
people.splice( 5, 0, 'Ray', 'Penelope' )
console.log( people )
people.shift()
console.log( people )
people.splice( 4, 2 )
console.log( people )
people.pop()
console.log( people )
people.splice( 8, 2 )
console.log( people )
people.splice( 8, 2 )
console.log( people )

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