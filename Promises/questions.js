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
// {   
//     // Guess the output 
//     console.log('start')

//     const fn = () => new Promise((resolve,reject) => {
//         console.log(1)
//         resolve('sucess')
//     })

//     console.log('middle')

//     fn().then((res) => {
//         console.log(res)
//     })

//     console.log('end')
    
// }

// QUESTION : 03:
// {
//     function fn() {
//         return new Promise((resolve,reject) => {
//             reject()
//         })
//     }

//     const promise = fn()

//     promise
//         .then(() => console.log('sucess 1'))
//         .then(() => console.log('sucess 2'))
//         .then(() => console.log('sucess 3'))
//         .then(() => console.log('sucess 4'))
//         .catch(() => console.log('Error 1'))
//         .then(() => console.log('sucess 5'))

        

// }

// QUESTION : 04
// {
//     function fn(state) {
//         return new Promise((resolve,reject) => {
//             if(state === true){
//                 resolve('sucess')
//             }else{
//                 reject('error')
//             }
//         })
//     }

//     let promise = fn(true)

//     promise
//         .then((data) => {
//             console.log(data)
//             return fn(false)
//         })
//         .catch((error) => {
//             console.log(error)
//             return 'Error Caught'
//         })
//         .then((data) => {
//             console.log(data)
//             return fn(true)
//         })
//         .catch((error) => console.log(error))
// }

// QUESTION : 05
// {
//     function fn(state) {
//         return new Promise((resolve,reject) => {
//             if(state === true){
//                 resolve('sucess')
//             }else{
//                 reject('error')
//             }
//         })
//     }

//     let promise = fn(true)

//     promise
//         .then((data) => {
//             console.log(data)
//             return fn(false)
//         })
//         .catch((error) => {
//             console.log(error)
//             throw 'Error Caught'
//             return fn(true)
//         })
//         .then((data) => {
//             console.log(data)
//             return fn(true)
//         })
//         .catch((error) => console.log(error))
// }

// QUESTION : 06
// {
//     // rewrite this code using async await and get similar results
//     function loadJson(url){
//         return fetch(url).then((response) => {
//             if (response.status === 200){
//                 return response.json()
//             }else{
//                 throw new Error(response.status)
//             }
//         })
//     }

//     // loadJson('https://jsonplaceholder.typicode.com/users')
//     //     .then((data)=> {
//     //         console.log(data)
//     //     }).catch(error=>console.log(error))

//     async function loadJson2(url){
//         try {
//             response = await fetch(url)
//             data = await response.json()
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     loadJson2('https://jsonplaceholder.typicode.com/users')


// }

