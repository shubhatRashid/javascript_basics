// SYNC AND ASYNC CODE IN JAVASCRIPT

    // SYNCHRONOUS CODE : code that runs line by line
    {
        // example:
        // console.log('this')
        // console.log('is')
        // console.log('synchronous')
        // console.log('code')
    }

    // ASYNCHRONOUS CODE : some lines of code may execute later
    {
        // example:
        // console.log('this')
        // console.log('code')
        // console.log('is')
        // setTimeout(() => {
        //     console.log('asynchronous')
        //     console.log('code')
        // },2000)
        // console.log('...')
    }

    // NOTE :
    // Javascript always executes synchoronous code first and the asynchronous
    // as javasscript is single threaded language and connot run parallel
    // operations

// CALLBACKS : functions which are passed as arguments to other functions

    // QUESTION :
        // {
        //     console.log('start')

        //     function slow(userName){
        //         setTimeout(() => {
        //             return userName
        //         },1000)
        //     }
        //     const message = slow('shubhat')
        //     console.log(message)
        //     console.log('finish')

        //     // output :
        //         // start
        //         // undefined
        //         // finish

        //     // how to run this code properly ?

        // }
    // SOLUTION : using callbacks
        // {   
        //     console.log('start')

        //     function slow(userName,cb){
        //         setTimeout(() => {
        //             return cb(userName)
        //         },1000)
        //     }
        //     slow('shubhat',(message)=> {console.log(message)})
        //     console.log('finish')

        // }

    // QUESTION : What if there is a function which depends on 
    //            slow functions result, how to execute it ?
    // SOLUTION : this is also achieved using callbacks
        // {
        //     console.log('start')

        //     function slow(userName,cb){
        //         setTimeout(() => {
        //             return cb(userName)
        //         },1000)
        //     }

        //     function dependent(cb){
        //         setTimeout(() => {
        //             return cb()
        //         },1000)
        //     }

        //     slow('shubhat',(message)=> {
        //         console.log(message)
        //         dependent(()=> {console.log('slow has executed')})
        //     })

        //     console.log('finish')
        // }
    
    // QUESTION : What if there are more dependent function ?
    // SOLUTION : The code gets messy and messy each time we
    //            use a callback ,such a code is call 'Pyramid of doom' 
    //            and such concept is called 'CallBack Hell' 
    //            so we need an alternative..

// PROMISES : javascript concepts which help in executing async code
           // and handle their errors

    // {
    //     const asyncfunction = new Promise((resolve,reject) => {
    //         setTimeout(()=> {
    //             result = true
    //             if (result) resolve()
    //             else reject()
    //         },1000)
    //     })

    //     asyncfunction
    //         .then(()=>console.log('sucessfull')) // alternate for callbacks
    //         .catch(()=>console.log('rejected'))  // helps catch errors
    // }

    // Implememtating promises to our problem :
        // {
        //     console.log('start')

        //     function slow(userName){
        //         return new Promise((resolve,reject) => {
        //             setTimeout(() => {
        //                 resolve(userName)
        //             },1000)
        //         })
                
        //     }

        //     function dependent(){
        //         return new Promise((resolve,reject) => {
        //             setTimeout(() => {
        //                 resolve()
        //             },1000)
        //         })
        //     }

        //     slow('shubhat')
        //         .then((userName) => {
        //             console.log(userName)
        //             dependent()
        //                 .then(()=> {
        //                     console.log('slow was executed')
        //                 })
        //     })

        //     console.log('finish')
        //     // The code looks like a 'Pyramid dome' and hence there is a way to simplify it
        // }

    // Implementating promise chaining to our problem :
        // {
        //     console.log('start')

        //     function slow(userName){
        //         return new Promise((resolve,reject) => {
        //             setTimeout(() => {
        //                 resolve(userName)
        //             },1000)
        //         })
                
        //     }

        //     function dependent(){
        //         return new Promise((resolve,reject) => {
        //             setTimeout(() => {
        //                 resolve()
        //             },1000)
        //         })
        //     }

        //     slow('shubhat')
        //         .then((username)=>{
        //             console.log(username)
        //             return dependent()
        //         })
        //         .then(() => {
        //             console.log('slow was executed')
        //         })

        //     console.log('finish')
        //     // The code looks looks much better
        // }

// PROMISE COMBINATORS :
    // Promise.all() : executes all promises at a time and return array of promise values
        // {
        //         console.log('start')

        //         function slow(userName){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return resolve(userName)
        //                 },1000)
        //             })
                    
        //         }

        //         function dependent(){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return reject('dependent failed')
        //                 },1000)
        //             })
        //         }

        //         Promise.all([slow('shubhat'),dependent()])
        //             .then((array)=>{
        //                 console.log(array[0])
        //                 console.log('slow was executed')
        //             })
        //             .catch((err) => {
        //                 throw new Error(err)
        //             })

        //         console.log('finish')

        //         // promise.all() executes all promises at a time and if one
        //         // of them fails all fail.It returns an array of return values
        //         // of all promises
        // }
    
    // Promise.race() : return only first promise 
        // {
        //         console.log('start')

        //         function slow(userName){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return resolve(userName)
        //                 },100)
        //             })
                    
        //         }

        //         function dependent(){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return reject('dependent failed')
        //                 },1000)
        //             })
        //         }

        //         Promise.race([slow('shubhat'),dependent()])
        //             .then((result)=>{
        //                 console.log(result)
        //             })
        //             .catch((err) => {
        //                 throw new Error(err)
        //             })

        //         console.log('finish')

        // }

    // Promise.allSettled() : return an array of results, those who resolved returns their 
    //                        value and those who failed return their error messages
        // {
        //         console.log('start')

        //         function slow(userName){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return resolve(userName)
        //                 },1000)
        //             })
                    
        //         }

        //         function dependent(){
        //             return new Promise((resolve,reject) => {
        //                 setTimeout(() => {
        //                     return reject('dependent failed')
        //                 },100)
        //             })
        //         }

        //         Promise.allSettled([slow('shubhat'),dependent()])
        //             .then((result)=>{
        //                 console.log(result)
        //             })
        //             .catch((err) => {
        //                 throw new Error(err)
        //             })

        //         console.log('finish')

        // }

    // Promise.any() : return the first promise which is resolved 