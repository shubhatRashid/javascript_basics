// SYNC AND ASYNC CODE IN JAVASCRIPT

// SYNCHRONOUS CODE : code that runs line by line
// example:
// console.log('this')
// console.log('is')
// console.log('synchronous')
// console.log('code')

// ASYNCHRONOUS CODE : some lines of code may execute later
// example:
console.log('this')
console.log('code')
console.log('is')
setTimeout(() => {
    console.log('asynchronous')
    console.log('code')
},2000)
console.log('...')

