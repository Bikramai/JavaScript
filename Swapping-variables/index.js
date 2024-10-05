/**************************************************************************************************************
Problem :-
Declare 2 variables, and a set it to red, and b set to blue. Now when we log these on the console, obviously
we're going to get red and blue. Now, write some code to swap the value of these two variables. So when we 
log these on the console, instead of getting red and blue, we're going to get blue and red. 
***************************************************************************************************************/

// Solution:-

/*************************************************************************************************************
Logic:
To swap the value of two variables we need a third variable. So, let's declare another variable
let's call it c, we're going to use that as a backup. So whatever we're storing in a, 
we're going to put that in other variable that is c, then we're going to copy b to a. 
And finally what we have in c, which was the valur of a before we're going to copy that to b. 
**************************************************************************************************************/



let a = 'red';
let b = 'blue'

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);