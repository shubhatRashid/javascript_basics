// QUESTION 02 : WHAT IS APPLY?
{
    object = {
        name:'shubhat'
    }

    function hello(greetings,time) {
        console.log('hello ' + this.name)
        console.log(greetings +" "+ time)
    }
    
    hello.apply(object,['good','morning']) // return 'hello shubhat'

    // apply does the same as call but takes the parameters of function as an array
    // apply takes two arguments :
        // the object which we want it to acces using this keyword
        // the arguments array which contains all the function arguments
}