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