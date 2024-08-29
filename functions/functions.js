// FUNCTION DECLERATION
    // {
    //     function returnHello() {
    //         return 'hello'
    //     }

    //     // with parameters
    //     function greet(greetMsg){
    //         return greetMsg
    //     }
    // }

// FUNCTION EXPRESSION AND ANONYMOUS FUNCTION
    // {
    //     const anfun = function(){
    //         return 'hello'
    //     }
    // }

// FUNCTION INVOCATION
    // {    
    //     // Every time a function is invoked a new execution context in added to 
    //     //  execution context stack. This execution context like the window object will 
    //     //  have its own properties and memory and is accessible using this keyword.
    //     function a (){}

    //     function b (){
    //         a()
    //     }

    //     b()

    //     // executionStack = [b,a,global]
    // }
    
// FIRST CLASS FUNCTIONS
    // {
    //     // functions which can be treated as variables :
    //     //     decleared as variables
    //     //     passed in other function as argument
    //     //     returned from other functions
    // }

// IIFE
    // {
    //     (function helloWorld(){
    //         console.log('hello world')
    //     })()

    //     // functions which are decleared and called simultanously
    //     console.log(
    //         function displaySquare(y){
    //         return function square(x){
    //             return x*x
    //         }(6)
    //     }(7)

    //     // guess return value ?
    //     )
    // }

// ARROW FUNCTIONS
    // {
    //     const hello = () => {
    //         return 'hello'
    //     }
    //     // simpler syntax
    //     // generally used in callbacks
    //     // has global or window scope for 'this' keyword
    //     // not accessible before decleration
    //     // donot have arguments keyword
    //     // cannot be used to build a constructor
    // }

// HOISTING IN FUNCTIONS
    // {   
    //     greetme('hello world')
    //     function greetme(msg){
    //         console.log(msg)
    //     }

    //     // normal function are hoisted 
    //     // ARROW functions are not hoisted as they are function expressions and like all 
    //     // variables their declerations are hoisted and not initializations

    // }

// ARGUMENTS AND PARAMS
    // {
    //     // Values decleared at the time of decleration are parameters
    //     // Values passed at the time of calling are arguments
    // }

// REST AND SPREAD OPERATORS
    // {   
    //     // REST OPERATOR TAKES ALL VALUES AND GIVES AN ARRAY OF THEM :
    //     let myarr = [1,2,3,4]
    //     function restfunction (...array){ // ... array is rest operator
    //         console.log(array)
    //     }
    //     restfunction(1,2,3,4,5) // indivisual values given
    //     // output : [1,2,3,4,5]


    //     // SPREAD OPERATOR SPREADS ALL VALUES OF AN ARRAY INTO INDIVISUAL ONES
    //     let myarr1 = [1,2,3,4]
    //     function spreadfunction (array){ // ... array is spread operator
    //         console.log(...array)
    //     }
    //     spreadfunction(myarr1) // indivisual values given
    //     // output : 1 2 3 4 


    // }

// CALLBACK FUNCTION 
    {
        // FUNCTIONS WHICH ARE PASSED AS ARGUMENTS INTO OTHER FUNCTIONS
        // EVENT LISTENERS
        // SETTIMEOUT
        // ARRAY METHODS
        
    }

