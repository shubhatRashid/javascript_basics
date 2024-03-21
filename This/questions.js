// QUESTION 01:
{
    // what will be the output ?
    const person = {
        firstName : 'shubhat',
        logName : function(){
            const firstName = "shubhat rashid"
            console.log(this.firstName)
        }
    }
    // person.logName()
    // Solution : Output will be 'shubhat' as this inside a function which is a 
    // method in an object refers to the object itself
}