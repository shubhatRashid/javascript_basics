// QUESTION 01 : WHAT IS CALL ?
{
    object = {
        name:'shubhat'
    }

    function hello(greetings,time) {
        console.log('hello ' + this.name)
        console.log(greetings +" "+ time)
    }
    hello('good','morning') // returns 'hello undefined' as this keyword here would point to its parent which is window/global
    // so how do we call hello with context of object on it ?

    // 1) one way is to make function a method of the object which is not always possible 
    // 2) another is to use call method
    hello.call(object,'good','morning') // return 'hello shubhat'

    // call takes two arguments :
        // the object which we want it to acces using this keyword
        // the arguments which are all the function arguments
}