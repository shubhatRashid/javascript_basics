//  Syntax Parsers : A program that reads the code and determines 
//                     what it does if its grammer is correct.

//  Lexical Environment : The environment or place where the code is literally 
//                          written in the file or project.    

// Execution Context : A wrapper to help manage the code that is running.
//                          decides which lexical environment is currently
//                          running.

// Event Queue : Events which are called by external engines like browser window
//                are saved in a queue called event queue.For an event to occur the 
//                the exucution context from previous events or code must be empty.

// Dynamic Typing : Js engine figures out what type of data a variable holds by 
//                  itself during execution

// Operators : Functions which are written differently(infix notation instead of prefix) than other normal functions
//                which generally take two values and return one value

// Operator Presedence : which gets called first.
// Operator Associativity : order in which operators are called in when they have same precedence.
//                          Example :
                            {
                                let a = 2 ,b = 3 ,c=4
                                a = b = c
                                console.log(a,b,c) 
                                
                                // returns 4,4,4
                                // because = has right to left(js documentation) associativity b=c is executed first
                                // which sets b = 4 and then a = b is executed which sets a = 4.
                            }

// Coercion : convert value from one type to another.
                            {
                                let a = 1
                                let b = '2'
                                console.log(a+b) // return 12 as both are treated as string
                                console.log(typeof(a+b)) // string
                                console.log(a-b) //converts both to number hence -1
                                console.log(typeof(a-b)) // number

                            }
                        // 0 -> false
                        // greater=1 -> true
// Note: 
    // 'undefined is converted to NaN'
    // 'null is converted to 0'

// Comparison operators :      
        {
            console.log(1<2<3) // return true 
            console.log(6<4<3) // returns true 
            // but why? it should be false mathematically?

            // < operator has left to right associativity
            // and hence 6<4 is first executed which returns
            // false now expression becones false < 3 here now 
            // coercion happens and false is converted to 0
            // so expression is 0<3 which return true
        }
        //NOTE - '==' and '!=' uses type coercion while '===' and '!==' are strict and donot
        //          coerce values
