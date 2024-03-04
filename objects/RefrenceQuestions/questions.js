// QUESTION : 01
{
    // console.log({a:1} == {a:1}) 
    // console.log({a:1} === {a:1})

        // both return false as objects are compared 
        // by their refrences and not value i.e if they
        // refer to same space in memory
}

// QUESTION : 02
{
    let person = {name:'lydia'}
    const members = [person]
    person = null;
    // console.log(members) // ? returns original person array
    // console.log(person) // ? returns null

    // here members holds the refrence to the 
    // original object and hence it is logged
    // the person VARIABLE holding the refrence to object
    // is changed to null hence returns null however if a specific 
    // property of the object is changed that will reflect everywhere
    // example
        // person.name = 'apple'
        // console.log(person) //  apple
        // console.log(members) // apple
} 

// QUESTION : 03
{
    let value = {number:10}
    const multiply = (x={...value}) => {
        return x.number *= 2
    }
    // console.log(multiply()) // returns 20
    // console.log(multiply()) // returns 20
    // console.log(multiply(value)) // returns 20
    // console.log(multiply(value)) // returns 40
    
    // when nothing is provided to multiply it 
    // uses value makes a copy of it using spread
    // operator and changes that copy that is why 
    // ist two multiply return 20
    // When value is exclusively provided inside 
    // multiply it refers to original object and changes that
    // that is why it changes to 40 second time around
}