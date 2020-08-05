// Exercises & Solutions
/*
    Get the #star-wars-characters list with id and tag selectors.
    From the #star-wars-characters list, get the following:
    Luke Skywalker with class, tag and attribute selectors
    Yoda with class and attribute selectors
    Darth Vader with class and attribute selectors
    Notice how you can’t select Yoda and Darth Vader with tags when you use querySelector.
*/

// with id
const getCharactersFromStartWarsListWithID = document.querySelector( '#star-wars-characters' )
console.log( getCharactersFromStartWarsListWithID )

// with tag
const getCharactersFromStartWarsListWithTAG = getCharactersFromStartWarsListWithID.querySelector( 'li' )
console.log( getCharactersFromStartWarsListWithTAG )

// With class
const getLukeSkywalkerWithClass = getCharactersFromStartWarsListWithID.querySelector( '.luke' )
console.log( getLukeSkywalkerWithClass )

// With tag
const getLukeSkywalkerWithTAG = getCharactersFromStartWarsListWithID.querySelector( 'li' )
console.log( getLukeSkywalkerWithTAG )

// With attribute
const getLukeSkywalkerWithAttribute = getCharactersFromStartWarsListWithID.querySelector( '[data-type=hero]' )
console.log( getLukeSkywalkerWithAttribute )

// With class
const getYodaWithClass = getCharactersFromStartWarsListWithID.querySelector( '.yoda' )
console.log( getYodaWithClass )

// With attribute
const getYodaWithAttribute = getCharactersFromStartWarsListWithID.querySelector( '[data-type=master]' )
console.log( getYodaWithAttribute )

// With class
const getDarthVaderWithClass = getCharactersFromStartWarsListWithID.querySelector( '.badboy' )
console.log( getDarthVaderWithClass )

// With attribute
const getDarthVaderWithAttribute = getCharactersFromStartWarsListWithID.querySelector( '[data-type=villain]' )
console.log( getDarthVaderWithAttribute )