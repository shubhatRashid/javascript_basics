let myarray = [1,2,3,4,5,6]

// Using spread operator we can concat an array into another one easily or even put an array in between the elements of another array.
let anotherArray = [7,8,9,10,...myarray,11,12,13]
console.log(anotherArray)