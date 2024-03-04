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
    console.log(members) // ? returns original person array
    console.log(person) // ? returns null

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