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
    console.log(members)
    console.log(person) // ?
} 