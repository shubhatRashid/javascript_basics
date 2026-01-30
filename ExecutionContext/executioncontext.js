// Execution Context : a special environment created by the javascript engine to run the js code. it includes allocating memory heaps to store 
//                     variables and functions ,creating global Object like 'window' in browser, creating 'this' property and binding 
//                     it to the global object .setting the variables to "undefined" in global objects and followed by the execution phase 
//                     where code is executed.A new execution context is created for every function call.

//      STEPS : 
//         MEMORY ALLOCATION : 
//                 allocate memory,
//                 create global object,
//                 bind 'this' to global object,
//                 put variables and functions into memory, the variables are set to undefined , and function with their definitions.

//         EXECUTION PHASE : 
//                 variables set to their values ,
//                 code is executed line by line,
//                 a new exucution context is created for every function call and the whole process is repeated.


            // Use debugger in chrome to see this code step by step to check the working of execution context   

            // let string = 'hello world'
            // let anotherString = 'i am typing'
            // function concat(s1,s2){
            //     return s1 + s2
            // }
            // console.log(string)
            // console.log(concat(string,anotherString))

// CALL STACK : 
            // Manager for execution contexts.
            // when a function is called it creates its own execution context and gets added to a stack which is storing 
            // any previous parent calls that havent been executed yet. this call will be at the top of the stack and would be executed first and will
            // return a value which the next execution context will take and execute and so on.
            // the last context in the stack is the global execution context



// Use Debugger in chrome and go step by step to see call stack working for this code. the functions are added and removed from call stack step by step.
// function first (){
//     return;
// }

// function second (){
//     return;
// }

// function third (){
//     return;
// }

// first()
// second()
// third()

// Now we nest the functions to see the call stack working
function first (){
    second()
    return;
}

function second (){
    third()
    return;
}

function third (){
    return;
}

first()



