//THIS IN NORMAL FUNCTION REFERS TO WINDOW OBJECT //

// 'this' in normal function
{
    this.a = 5
    function hello(){
        console.log(this.a)
    }
    //hello() // return undefined here but in browser will return 5

    const arrowhello = () => console.log(this.a)
    //arrowhello() returns 5 as in arrow function this refers to its parent functions object or window example below

    const parent = {
        a:10,
        newhello :function (){
            const inner = () => {
                console.log(this.a)
            }
            inner() 
    }
    }
    //parent.newhello() returns 10
}

// THIS KEYWORD IN OBJECT METHODS REFERS TO PARENT OBJECT ITSELF AND ONLY TO IT

// 'this' in object method'
{
const person = {
    firstName : 'shubhat',
    lastName : 'rashid',
    fullName : function () {return this.firstName +" "+ this.lastName}
}
//console.log(person.fullName()) returns shubhat rashid
}

// THIS KEYWORD INSIDE OF A CLASS REFERS TO CONSTRUCTOR ITSELF
{
class PersonClass {
    constructor(name,age){
        this.name = name,
        this.age = age
    } 
    getName(){
        console.log(this.name)
        console.log(this.age)
    }  
}
const person = new PersonClass('shubhat',24)
person.getName() // return shubhat 24
}