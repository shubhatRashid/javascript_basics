// QUESTION 01 :
{
    object = {
        name:'shubhat'
    }

    function hello(greetings,time) {
        
        return ('hello ' + this.name + greetings +" "+ time)
    }
    
    console.log(hello.apply(object,['good','morning'])) 
    console.log(hello.bind(object,'good','morning'))
    
    // output ?
    // solution :
        // hello shubhatgood morning
        // [Function: bound hello]
}