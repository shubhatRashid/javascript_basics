// Earlier in js only "var" keyword was used which means any kind of varaible
// it could be number,string or boolean
// Now there are two more keywords to declear a variable i.e
// "let and const"

// VAR KEYWORD :
// {   
//     // variables can be defined in block scope or functional scope or global scope
//     // variable decleared with var keyword are available throughout the functional scope 

//     var myname = "shubhat"   // global scope
//     console.log(myname)

//     const user = {      // available inside object
//         username : myname
//     }
//     console.log(user.username)

//     function temp(){        // functional scope
//         console.log(myname) // available inside function
//     }
//     temp()

//     if (true){                                    
//         console.log(myname)  // block scope
//         var newname = 'rashid shubhat'
//     }

//     console.log(newname)                            // var available outside block as well
// }

// LET and const KEYWORD
{
    // Variables defined with let or const keyword are available in their parent block only and not outside of it
    // variable decleared with const cannot be reassigned or changes after decleration
    
    if (true){
        let myname = 'shubhat'
        const age = 20
        console.log(myname) // prints 'shubhat'
        console.log(age)    // prints 20
    }
    console.log(nyname) // ERROR : myname is not defined
    console.log(age)        // ERROR : age is not defined
}