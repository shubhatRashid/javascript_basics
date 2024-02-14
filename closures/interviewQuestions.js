// QUESTIONS 01 :
    // WRITE A FUNCTION THAT ALLOWS TO DO THIS
    // var addSix = createBase(6)
    // addSix(10) returns 16
    // addSix(21) returns 27

    function createBase(a){
        return function (b){
            return b + a
        }
    }
    var addSix = createBase(6)
    // console.log(addSix(10)) returns 16
    // console.log(addSix(21)) returns 27

// QUESTION 02 :
    