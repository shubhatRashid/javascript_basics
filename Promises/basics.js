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
        {
            console.log('start')

            function slow(userName,cb){
                setTimeout(() => {
                    return cb(userName)
                },1000)
            }

            function dependent(cb){
                setTimeout(() => {
                    return cb()
                },1000)
            }

            slow('shubhat',(message)=> {
                console.log(message)
                dependent(()=> {console.log('slow has executed')})
            })

            console.log('finish')
        }
    
    // QUESTION : What if there are more dependent function ?
    // SOLUTION : The code gets messy and messy each time we
    //            use a callback so we need an alternative..
