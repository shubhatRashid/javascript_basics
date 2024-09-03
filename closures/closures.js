// SCOPE :
    {
        /*
        Scope determines the area where variables are accessible for usage 
        
        Block Scope : The area inside {} i.e loops , conditional statements etc 
                      is termed as block scope . 'let' keyword has block scope 
                      
        Fucntional Scope : The area inside a function

        Global Scope : All of the file is global scope 
        
        Lexical Scope : The scope where a variable or function is defined
        */
        
    }

// CLOSURES :
    // {
    //     /*
    //     Closures are functions together with their surrounding scope i.e the area where they are decleared and
    //     the variables in that area (both definition and value)

    //     if a function is nested in another function , closures are allows them to access variables decleared in
    //     the parent functions scope
    //     */

    //     function hello() {
    //         let temp = 'bye';
            
    //         (function world() {
    //           console.log(temp);
    //         })();
    //       }
          
    //       hello(); // This should log 'bye' to the console
          
    // }

// NOTE : CLOSURE ARE CREATED IN ORDER TO GIVE FUNCTIONS ACCESS TO THEIR PRIVATE VARIABLES INCASE
//        THEY ARE CALLED OUTSIDE OF THEIR LEXICAL SCOPE

// SCOPE CHAINING : 
{
    function b (){
        console.log(myvar)
    }
    
    function a (){
        var myvar = 1
        b()
    }

    var myvar = 0
    a()

    // Execution context stack = [b,a,global]
    // when the myvar was not found in execution context of b. js engine starts to look 
    // for it in execution context stack below the current execution context and so on untill it finds
    // the variable or reaches global execution context. This is called scope chaining where
    // functions can access execution contexts of  those below them in execution context stack.
}