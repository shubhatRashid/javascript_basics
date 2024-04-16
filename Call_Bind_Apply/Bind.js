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

    // apply takes two arguments :
        // the object which we want it to acces using this keyword
        // the arguments array which contains all the function arguments
}