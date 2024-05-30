//OBJECTS
    // {
        
    //     //Data structure where data is stored as key:value pair 
    //     const person = {
    //         name : 'shubhat',
    //         age : 26,
    //         getAge : function(){
    //             return this.age
    //         }
    //     }

    //     // functions inside objects are termed as methods
    //     // use delete keyword to delete a property inside objects
    //     delete person.age
    //     console.log(person)

    // }

// SYNTAX FOR DYNAMIC ENTRIES
    // {
    //     const propertyfirst = 'firstName'
    //     const propertyLast = 'lastName'

    //     const fn = 'shubhat'
    //     const ln = 'rashid'

    //     const user = {
    //         [propertyfirst]:fn,
    //         [propertyLast]:ln
    //     }

    //     // console.log(user)

    //     // deleting a property syntax
    //     // delete user.firstName
    //     // console.log(user)

    //     // looping through an object
    //     for (key in user){
    //         console.log(key,user[key])
    //     }
    // }

// STRINGIFY AND PARSE
    // {
    //     const person = {
    //             name : 'shubhat',
    //             age : 26,
    //             getAge : function(){
    //                 return this.age
    //             }
    //         }
        
    //     let person1 = JSON.stringify(person) // converts object into a string for taking less memory
    //     console.log(person1)
    //     let person2 = JSON.parse(person1)   // converts stringified object back to object
    //     console.log(person2)

    // }

// DESTRUCTURING OBJECTS AND SPREADING
    // {
    //     const person = {
    //         name : 'shubhat',
    //         age : 26,
    //         getAge : function(){
    //             return this.age
    //         }
    //     }
    //     let newPerson = {...person} // creates new object with similar properties using spread operator
    //     newPerson.name = 'rashid'
    //     console.log(person)
    //     console.log(newPerson)

    //     let {name:firstName,age} = person 
    //     // destructuring person into variables,
    //     // : newName is syntax for changing name of the property while taking out 
    //     console.log(firstName)
    //     console.log(age)
    // }

// NESTED OBJECT SPREADING AND DESTRUCTURING
    // {
    //     let user = {
    //         name:'shubhat',
    //         age : 26,
    //         hobbies : {
    //             game : ['cricket','pubg','basketball'],
    //             work : ['coding','gardening'],
    //             extra : ['cycling']
    //         }
    //     }

    //     // spreading hobbies
    //     let hobbies = {...user.hobbies}
    //     console.log(hobbies)

    //     // spreading game hobbies
    //     let gameHobbies = [...user.hobbies.game]
    //     console.log(gameHobbies)

    //     // destructuring all hobies at a time
    //     let {hobbies : {game,work,extra}} = user
    //     console.log(work)
    // }

// SHALLOW COPY AND DEEP COPY
    // {
        
    //     let user = {
    //         name:'shubhat',
    //         age : 26,
    //         hobbies : {
    //             game : {game1:{name:'cricket',origin:'aus'},game2:'pubg',game3:'basketball'},
    //             work : ['coding','gardening'],
    //             extra : ['cycling']
    //         }
    //     }

    //     const newUser = {...user}
    //     //console.log(newUser) 
    //     // This newUser object doesnot contain information of some nested objects i.e game1 object
    //     // This is called shallow copying 

    //     let anotherNewUser = JSON.parse(JSON.stringify(user))
    //     console.log(anotherNewUser)

    //     let newUser2 = Object.assign({},user)
    //     console.log(newUser2)
        
    // }