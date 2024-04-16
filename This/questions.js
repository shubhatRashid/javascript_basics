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
{   
    // what will be the output ?
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

// QUESTION 05:
{
    // CREATE A CALCULATOR USING AN OBJECT

    let calculator = {
        nums : [],
        read(...args){
            this.nums.push(...args)
        },
        add(){
            return this.nums[0] + this.nums[1]
        },
        mul(){
            return this.nums[0] * this.nums[1]
        }
    }
    // calculator.read(2,3) // reads two numbers
    // console.log(calculator.add()) // adds those two numbers
    // console.log(calculator.mul()) // multiplies those two numbers
}

// QUESTION 06:
{
    var length = 5
    const callback = function (){
        console.log(this.length)
    }

    const object = {
        length : 6,
        method(fn){
            fn()
        }
    }

    const object2 = {
        length : 6,
        method(){
            arguments[0]()
        }
    }
    callback() // on browser returns 5
    object.method(callback) // on browser returns 5
    object2.method(callback,2) // returns 2 as len(arguments) is 2
}

