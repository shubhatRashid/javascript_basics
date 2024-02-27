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
    console.log(obj)
}