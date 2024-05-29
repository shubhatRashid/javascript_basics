// SCOPE :
    {
        /*
        Scope determines the area where variables are accessible for usage 
        
        Block Scope : The area inside {} i.e loops , conditional statements etc 
                      is termed as block scope . 'let' keyword has block scope 
                      
        Fucntional Scope : The area inside a function

        Global Scope : All of the file is global scope 
        
        Lexical Scope : The scope where a variable or function is defined*/

        
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

// SCOPE CHAINING : IN A CLOSURE A FUNCTION HAS ACCESS TO ITS PARENTS SCOPE AND ITS PARENTS PARENTS SCOPE AND SO ON.