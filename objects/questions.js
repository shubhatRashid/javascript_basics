// QUESTION : 01 
{
    // guess the output
    const obj = {
        a : 1,
        b : 2,
        a : 4
    }
    // console.log(obj)
    // solution : in output a will be 4 as it is reassigned a value 4 later
}

// QUESTION : 02
{
    const obj = {
        a : 100,
        b : 200,
        c : 'hello'
    }

    // multiply numeric elements by 
    // solution
    for (key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2
        }
    }
    // console.log(obj)
}

// QUESTION : 03
{
    const a = {}
    const b = {key:'b'}
    const c = {key:'c'}
    a[b]=123
    a[c] = 456
    // console.log(a[b])
    // guess output
    // solution:
        // output is 456
        // explanation :
        // we use b as key and assign it value as 123 however a key
        // should be a string only therefore the key stored is [object object]
        // next we again use c as a key which is again an object and hence also
        // represents [object object ] key and is updated as 456 hence the output
        // is 456

}