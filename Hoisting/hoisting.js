//HOISTING
    // Javascript runs code in two phases creation and execution.
    // In creation phase javascript takes all variable declerations and moves them at
    // top of the table. This allows us to use variables before declearing them and this 
    // is called Hoisting
    console.log(a)
    var a = 7 // undefinded bc only declerations are hoisted not inilizations

    // var is hoisted with value undefined and is available to use but 'let and const'
    // are hoisted but are not available to use they are stored in 'Temporal dead zone'
    // and can be used after inilization.

    console.log(b) // refrence error
    let b = 7