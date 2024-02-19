// QUESTIONS 01 :
{
    // WRITE A FUNCTION THAT ALLOWS TO DO THIS
    // var addSix = createBase(6)
    // addSix(10) returns 16
    // addSix(21) returns 27

    // SOLUTION :

    function createBase(a){
        return function (b){
            return b + a
        }
    }
    var addSix = createBase(6)
    // console.log(addSix(10)) returns 16
    // console.log(addSix(21)) returns 27
}

// QUESTION 02 :
{
    // OPTIMISE TIME THAT IS AS INDEX INCREASES TIME INCREASES AS WELL DO SOMETHING THAT IT TAKES SAME TIME FOR ALL VALUES
    // function find(index){
    //     let a = []
    //     for (let i =0;i<1000000;i++){
    //         a[i] = i*i
    //     }

    //     console.log(a[index])
    // }

    // console.time('6')
    // find(6)
    // console.timeEnd('6')

    // SOLUTION :

    function find(){
        let a = []
        for (let i =0;i<1000000;i++){
            a[i] = i*i
        }

        return function(index){
            console.log(a[index])
        }
        
    }

    // var work = find()
    // console.time('20')
    // console.log(work(20))
    // console.timeEnd('20')

}

// QUESTION 03 :
{
    function A(){
        console.log('start')
        for(var i=0;i<3;i++){
            setTimeout(()=>{
                console.log(i)
            },1000*i)
        }
        console.log('end')
    }
    // A()
    // What is the output of this code ?

    // SOLUTION ;

    // output ;
    // start
    // end
    // 3
    // 3
    // 3
    // Because var has functional scope and setTimeout is asynchronous and hence runs after the
    // code has finished(even if time is 0) where it encounters value of i as 3 because thats where loop ends.
    // we can get 0,1,2 by replacing var with let as let hash block scope.
    // we can also do the same using closures i.e
    // function A(){
    //     console.log('start')
        
    //     for(var i=0;i<3;i++){
    //         function inner(i) {
    //             setTimeout(()=>{
    //                 console.log(i)
    //             },1000*i)
    //         }
    //         inner(i)
    //     }

    //     console.log('end')
    // }

}

// QUESTION 04 :

{   
    // MAKE A PRIVATE COUNTER USING CLOSURES
    function counter()  {
        var _counter = 0
        function add(increment){
            return _counter += increment
        }

        function retrieve(){
            console.log(_counter)
        }
        return {
            add,
            retrieve
        }
    }

    // const c = counter()
    // c.add(5)
    // c.add(15)
    // c.retrieve()
}

// QUESTION 05 :
{
    
}