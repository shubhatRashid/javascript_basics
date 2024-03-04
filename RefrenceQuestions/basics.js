let a = {greetings:'hey'}
let b = a
b.greetings = 'hello'

console.log(b.greetings,a.greetings) 
// output is 'hello hello' as b refers to a
// which is an object and any changes to b
// also reflect in a so they both point to same
// memory location
