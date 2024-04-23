// QUESTION :01
// {
//     // guess the output
//     console.log('start')

//     const promise = new Promise((resolve,reject) => {
//         console.log(1)
//         resolve(2)
//         console.log(3)
//     })

//     promise.then((res) => console.log(res))

//     console.log('finish')

// }

// QUESTION : 02:
{   
    // Guess the output 
    console.log('start')

    const fn = () => new Promise((resolve,reject) => {
        console.log(1)
        resolve('sucess')
    })

    console.log('middle')

    fn().then((res) => {
        console.log(res)
    })

    console.log('end')
    
}