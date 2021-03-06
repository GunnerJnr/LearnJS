const vars = {
    x: 200, // Translates 200px from left to right
    y: -200, // Translates 200px from bottom to top
    rotation: 90 // Rotates 90 degrees
}

const timeLine = new TimelineMax( {} )

document.addEventListener( 'DOMContentLoaded', function ( event )
{
    const blockie = document.querySelector( '.blockie' )
    timeLine.to( blockie, 2, { x: 828, rotation: 90 } )
    timeLine.to( blockie, 2, { y: 978, rotation: 180 } )
    timeLine.to( blockie, 2, { x: 0, rotation: 270 } )
    timeLine.to( blockie, 2, { y: 0, rotation: 360 } )
    timeLine.to( blockie, 2, { width: 930, height: 1080 } )
    timeLine.to( blockie, 2, { opacity: 0 } )
} )
