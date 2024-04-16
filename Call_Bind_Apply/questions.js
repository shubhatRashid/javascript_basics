// QUESTION 01 :
{
    object = {
        name:'shubhat'
    }

    function hello(greetings,time) {
        
        return ('hello ' + this.name + greetings +" "+ time)
    }
    
    // console.log(hello.apply(object,['good','morning'])) 
    // console.log(hello.bind(object,'good','morning'))
    
    // output ?
    // solution :
        // hello shubhatgood morning
        // [Function: bound hello]
}

// QUESTION 02 :
{
    const age = 10
    const person = {
        name : 'shubhat',
        age : 20,
        getAge : function() {
            return this.age
        }
    }

    var person2 = {
        age : 24
    }
    // console.log(person.getAge())
    // console.log(person.getAge.call(person2))

    // output ? 
    // solution :           
                    // 20
                    // 24
                    // as when call is used the parent object changes to person 2
                    // same will happen incase of bind and apply
}

// QUESTION 03 :
{
    let status = 'morning'
    setTimeout(()=> {
        let status = 'evening'
        const innerObj = {
            status : 'afternoon',
            getStatus : function () {
                console.log(this.status)
            }
        }
        innerObj.getStatus()
        innerObj.getStatus.call(this)
    })

    // afternoon
    // undefined : this refers to parent object inside a function which is window
}