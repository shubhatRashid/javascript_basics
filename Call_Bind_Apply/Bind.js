// QUESTION 01 : WHAT IS BIND?
{
    object = {
        name:'shubhat'
    }

    function hello(greetings,time) {
        console.log('hello ' + this.name)
        console.log(greetings +" "+ time)
    }
    
    const newFunction = hello.bind(object,'good','morning') // return 'hello shubhat'
    newFunction()
    // Bind provides us with new function that can be called anytime later
    // Bind leterally means to take a function and an object and bind them together as a new function which is returned.
    // bind takes two arguments :
        // the object which we want it to acces using this keyword
        // the arguments which contains all the function arguments
}