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

// QUESTION 03:
{
    // Fix the above question to get the expected output?
    const makeUser = function(){
        return {
            name : 'john',
            ref : function() {return this}
        }
    }

    const newUser = makeUser()
    // console.log(newUser.ref().name) returns 'john'
}

// QUESTION 04:
{   // what will be the output ?
    const person = {
        firstName : 'shubhat',
        logName : function(){
            console.log(this.firstName)
        }
    }
    //setTimeout(person.logName,1000)
    
    // Output will be undefined as it is passed as a callback function and not
    // as a method in setTimeout which doesnot have access to the person object
    // To fix this use an anonymous function as callback and use the method inside
    // that fucnction i.e

    // setTimeout(()=>{
    //     person.logName()
    // },1000)
}