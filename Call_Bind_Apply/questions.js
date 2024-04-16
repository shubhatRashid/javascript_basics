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