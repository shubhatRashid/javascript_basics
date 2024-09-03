//  Syntax Parsers : A program that reads the code and determines 
//                     what it does if its grammer is correct.

//  Lexical Environment : The environment or place where the code is literally 
//                          written in the file or project.    

// Execution Context : A wrapper to help manage the code that is running.
//                          decides which lexical environment is currently
//                          running.

// Event Queue : Events which are called by external engines like browser window
//                are saved in a queue calles event queue.For an event to occur the 
//                the exucution context from previous events or code must ve empty.

// Dynamic Typing : Js engine figures out what type of data a variable holds by 
//                  itself during executi on

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