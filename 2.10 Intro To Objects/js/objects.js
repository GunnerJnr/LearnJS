// create an object
const myObject = {
    key: 'value1',
    key: 'value2',
    key: 'value3'
}

// use an everyday item as an object
const desktopPC = {
    operatingSystem: 'Windows 10 Pro',
    screenResolution: '1920x1080',
    monitorSize: '23 inch',
    secondMonitor: 'Yes',
    USB3Compatible: true,
    externalDrives: 2,
    storage: '512 SDD & 2TB HDD'
}

// another example
const iPhone11 = {
    storage: '128gb',
    contracted: true,
    hasCamera: true,
    numOfCameras: 4,
    screenProtecter: 'Yes',
    case: 'Yes'
}

// objects can have a vast array of values
const multiObject = {
    string: 'Hello',
    number: 1234567890,
    boolean: true,
    anotherObject: {},
    aFunction: function () { },
    anArray: []
}

// accessing an objects properties with dot notation
const myValue = multiObject.string
console.log( myValue )

// accessing an objects properties with bracket notation
const myValue2 = multiObject[ 'number' ]
console.log( myValue2 )

// use bracket notation to return a property through a variable [returns 'Windows 10 Pro']
const getProperty = 'operatingSystem'
const pcStorage = desktopPC[ getProperty ] // this value 'operatingSystem' gets replaced with the actual propertie value 'Windows 10 Pro'
console.log( pcStorage )

// set property values
desktopPC.externalDrives = 4
console.log( desktopPC )

// delete a property
delete iPhone11.case
console.log( iPhone11 )

// functions in objects examples
function sayName () { }
sayName.property = 'David'
console.log( sayName.property )

// functions in objects examples (Methods)
const anotherObject3 = {
    aMethod: function ()
    {
        console.log( 'I am a function in an Object, more commonly known as a Method!' )
    }
}
anotherObject3.aMethod()

// functions in objects examples (Methods)
const gamingPC = {
    startStreaming: function ()
    {
        console.log( 'Gaming PC: Streaming is live!' )
    },
    stopStreaming: function ()
    {
        console.log( 'Gaming PC: Streaming is off air!' )
    }
}
gamingPC.startStreaming() // dot notation
gamingPC[ 'stopStreaming' ]() // bracket notation

// Lesson Exercises

// Create an empty object
const emptyObject = {}

// Make a property for your object that can be accessed with a dot notation. Get the value of this property.
const anotherObject4 = {
    Movie: 'Rocky',
    AnotherMovie: 'Rocky 2',
    DeleteMe: 'High School Musical',
    TVSeries: 'Fill Me In'
}
console.log( anotherObject4.Movie )

// Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
const anotherObject5 = {
    'Hello World': 'Hello, World!'
}
console.log( anotherObject5[ 'Hello World' ] )

// Set the value of a property with the dot notation.
anotherObject4.DeleteMe = 'Do not delete me know as I am no longer a crappy movie!'
console.log( anotherObject4.DeleteMe )

// Set the value of a property with the square bracket notation.
anotherObject4[ 'TVSeries' ] = 'Lost'
console.log( anotherObject4[ 'TVSeries' ] )

// Make a method. Call this method.
const anObjectWithAMethod = {
    myMethod: function ()
    {
        console.log( 'I am a method!' )
    }
}
anObjectWithAMethod.myMethod()

// Make a method that takes in an argument. Call this method.
const anObjectWithAMethodAndAnArg = {
    myMethodWithAnArg: function ( arg )
    {
        console.log( `I am a method with an argument! and my argument is: ${ arg }` )
    }
}
anObjectWithAMethodAndAnArg.myMethodWithAnArg( 'Hello' )
