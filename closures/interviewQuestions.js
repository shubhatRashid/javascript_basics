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
    
}