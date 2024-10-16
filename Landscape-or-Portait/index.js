/*
Problem:
Implement the function isLandsxape, it takes two parameters, 
width, and fheight of an image, and returns true, 
if the image is landscape, which means width is greater than height, 
otherwise it returns false. 
*/

console.log(isLandsxape(300, 600));


function isLandsxape(width, height) {
    return (width > height);
}