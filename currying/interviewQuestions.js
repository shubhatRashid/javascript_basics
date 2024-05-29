// QUESTION : 01 
// {
//     // write a function which can do this
//     // operate('operator')(1)(2)
//     // output = 3 if operator is add and so on.
//     const operate = (operator) => {
//         return function(a){
//             return function(b){
//                 operator == 'add' && console.log(a+b)
//                 operator == 'minus' && console.log(a-b)
//                 operator == 'divide' && console.log(a/b)
//                 operator == 'multiply' && console.log(a*b)
//             }
//         }
//     }
//     // operate('multiply')(2)(3)
//     // operate('add')(2)(3)
//     // operate('minus')(2)(3)
//     // operate('divide')(2)(3)

// }

//QUESTIONS : 02
// {
//     // Infinite currying
//     // implement curring with one return function but multiple arguments
//     // like add(1)(2)(3)(4)...

//     const add = (a) => {
//         return function(b) {
//             if (b) return add(a+b)
//             return a
//         }
//     }
//     // console.log(add(1)(2)(3)(4)(5)(6)())
// }

// QUESTION 03:
// {
//     // create a function which converts a normal 
//     // function into a currying function

//     function curry(fun){
//         return function currying (...args){
//             console.log(args.length,fun.length)
//             if(args.length >= fun.length){
//                 return fun(...args)
//             }else{
//                 return function (...next){
//                     return currying(...args,...next)
//                 }
//             }
//         }
//     }
//     const sum = (a,b,c,d) => a+b+c+d
//     const newSum = curry(sum)
//     console.log(newSum(1)(2)(3)(4))
// }
