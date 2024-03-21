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

// QUESTION 02:
{
    // What will be the output ?
    const makeUser = function(){
        return {
            name : 'john',
            ref : this
        }
    }

    const newUser = makeUser()
    // console.log(newUser.ref.name)
    // Solution : output undefined as this will refer to window and not the object 
    //            only incase of a method inside the object will it refer to the 
    //            Object.
}