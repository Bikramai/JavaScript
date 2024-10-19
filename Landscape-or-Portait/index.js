/*
Problem:
Implement the function isLandsxape, it takes two parameters, 
width, and fheight of an image, and returns true, 
if the image is landscape, which means width is greater than height, 
otherwise it returns false. 
*/


// Solution:
// Logic Mapping approch
// declare function & make parameters width and height
// make if & else statement. inside parameters, - (width > height)
// return true or return false.  
// return (w > h)
// add conditional operator on same line with true : false, 

// Poor way or amateurish
console.log(isLandsxape(300, 600));

function isLandsxape(width, height) {
    return (width > height) ? true : false;
        
}


// Optimized way or Best practice

console.log(isLandsxape(800, 600));


function isLandsxape(width, height) {
    return (width > height);
}