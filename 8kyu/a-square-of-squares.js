/*A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false 8*/

// My solution

// STEP ONE: Take the square root of the number.
// STEP TWO: Take floor/ceil/round of the square root which we got in step 1.
// STEP THREE: Subtract value we got in step 2 from the square root.
// STEP FOUR: If the output of step 3 is 0 then the number is perfect square else not.

var isSquare = function(n){
    if(n === 0){
    
    return true} else {
    return n > 0 && Math.sqrt(n) % 1 === 0;
     }
    } 