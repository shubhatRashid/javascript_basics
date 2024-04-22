// QUESTION :01
{
    // guess the output
    console.log('start')

    const promise = new Promise((resolve,reject) => {
        console.log(1)
        resolve(2)
        console.log(3)
    })

    promise.then((res) => console.log(res))

    console.log('finish')

}