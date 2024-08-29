//HOISTING
    // Javascript execution context runs code in two phases creation and execution.
    // In creation phase javascript takes all variable declerations and allocates memory
    // space for them before execution. variables are stored with a value of 'undefined'.
    // same thing happens for functions but functions are stored along wiht their entire 
    // definitions.

    console.log(a)
    var a = 7 // undefinded bc only declerations are hoisted not inilizations

    // NOTE : undefined is not same as not defined but rether a should be treated 
    //          as a value given by js engine after allocating variable a memory space.

    // var is hoisted with value undefined and is available to use but 'let and const'
    // are also hoisted but are not available to use as they are stored in 'Temporal dead zone'
    // and can be used after inilization.

    console.log(b) // refrence error
    let b = 7