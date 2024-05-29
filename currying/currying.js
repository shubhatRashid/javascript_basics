// CURRYING :
/* 
   CONVERTING A FUNCTION WHICH TAKES MULTIPLE ARGUMENTS AT A TIME INTO A FUNCTION
   WHICH TAKES SINGLE ARGUMENT AT A TIME AND RETURNS ANOTHER FUNCTION WHICH TAKES 
   NEXT ARGUMENT AND SO ON.
   CURRYING IS POSSIBLE DUE TO :
        IIFE's
        CLOSURES

   CURRYING ALLOWS:
    => PUTTING CHECKS AND VALIDATION ON EACH PARAMETER MY GIVING EACH
       PARAMETER ITS OWN FUNCTION
*/
{
// EXAMPLE :
    function add(a,b,c){         // Normal function
        return a+b+c
    }

    console.log(add(1,2,3))

    function curryAdd(a){       // CURRYING FUNCTION
        return function (b){
            return function(c){
                return a+b+c
            }
        }
    }
    console.log(curryAdd(1)(2)(3))
}