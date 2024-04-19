// CALL POLYFILL
{
    Function.prototype.myCall = function(obj,...arguments){
        
        const newContext = {
            ...obj,
            mymethod:this
        }
        return newContext.mymethod(...arguments)
    }
    const user = {
        name : 'shubhat'
    }
    function hello(age,fullName){
        console.log(this.name + ' is a coder at the age of ' + age + ' His full name is ' +fullName)
    }

    //hello.myCall(user,24,'shubhat Rashid')
    
}

// APPLY POLYFILL
{
    Function.prototype.myApply = function(obj,arguments){
        if (typeof(arguments) != 'object'){
            throw new Error('non iterable arguments')
        }
        const newContext = {
            ...obj,
            mymethod:this
        }
        return newContext.mymethod(...arguments)
    }
    const user = {
        name : 'shubhat'
    }
    function hello(age,fullName){
        console.log(this.name + ' is a coder at the age of ' + age + ' His full name is ' +fullName)
    }

    hello.myApply(user,[24,'shubhat Rashid'])
    
}

// BIND POLYFILL
{
    Function.prototype.myBind = function(obj,...arguments){

        if (typeof this !== 'function'){
            throw new Error('Not callable')
        }
        
        const newContext = {
            ...obj,
            mymethod:this
        }
        return () => newContext.mymethod(...arguments)
    }
    const user = {
        name : 'shubhat'
    }
    function hello(age,fullName){
        console.log(this.name + ' is a coder at the age of ' + age + ' His full name is ' +fullName)
    }
    newHello = hello.myBind(user,24,'shubhat Rashid')
    //newHello()
}