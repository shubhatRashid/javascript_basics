// Turning normal function with multiple parameters 
// into a function which takes one parameter at a time 
// and returns back a function seeking another argument
// is 

// QUESTION : 01 
{
    // write a function which can do this
    // operate('operator')(1)(2)
    // output = 3 if operator is add and so on.
    const operate = (operator) => {
        return function(a){
            return function(b){
                operator == 'add' && console.log(a+b)
                operator == 'minus' && console.log(a-b)
                operator == 'divide' && console.log(a/b)
                operator == 'multiply' && console.log(a*b)
            }
        }
    }
    operate('multiply')(2)(3)
    operate('add')(2)(3)
    operate('minus')(2)(3)
    operate('divide')(2)(3)

}
