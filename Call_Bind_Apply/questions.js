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
    let age = 10
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
        // innerObj.getStatus()
        // innerObj.getStatus.call(this)
    })

    // afternoon
    // undefined : this refers to parent object inside a function which is window
}

// QUESTION 04 :
{
    const animals = [
        {species:'Lion',name:'King'},
        {species:'Whale',name:'Queen'}
    ]

    function printAnimals (i) {
        this.print  = function(){
            // console.log('# ' + i + " " + this.species + ": " + this.name)
        }
        this.print()
    }

    // print all animals using printAnimals
    for (let i = 0;i<animals.length;i++){
        printAnimals.call(animals[i],i)
    }
}

// QUESTION 05 :
{
    // concatinate two arrays using apply
    let arr1 = ['1','2','3']
    let arr2 = ['6','5','4']

    arr1.push.apply(arr1,arr2)
    //console.log(arr1)

    // find max of the resultant array ?
        // console.log(Math.max.apply(null,arr1))
}

// QUESTION 06 :
{
    function f(){
        console.log(this)
    }

    const user = {
        g : f.bind(null)
    }

    // user.g()   ?
    // window object
}

// QUESTION 07 :
{
    function f(){
        console.log(this.name)
    }

    f = f.bind({name:'shubhat'}).bind({name:'rashid'})
    // f() ?
    // bind chaining doesnot change the context that has been
    // set once hence output is 'shubhat'
}

// QUESTION 08 :
{
    function checkPassword(sucess,failed){
       let password = prompt('enter your password')
       if (password=='shubhat'){
        sucess()
       }else{
        failed()
       }
    }

    const user = {
        name : 'shubhat rashid',
        sucess : function(){
            console.log(this.name + ' logged in sucessfully')
        },
        failed : function(){
            console.log(this.name + ' failed to login')
        }
    }

    //checkPassword(user.sucess,user.failed) // edit this line so that it runs as expected
    // checkPassword(user.sucess.bind(user),user.failed.bind(user))
}

// QUESTION 08 :
{
    const user = {
        age : 24,
        getAge : function(){
            console.log(this.age)
        },
        getAgeArrow : () => {
            console.log(this.age)
        }
    }
    let person = {
        age : 30
    }

    // user.getAge.call(person) // 30
    // user.getAgeArrow.call(person) // undefined
    // Arrow function doesnot change context its context is set by parent normal function or window
}