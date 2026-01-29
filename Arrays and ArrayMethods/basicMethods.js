let myarray = [1,2,3,4,5]

// MANUPLATING THE ARRAY
myarray.push(6) // adds an element at the end of array
myarray.pop() // removes the last element
myarray.unshift(0) // adds an element at the begining
myarray.shift() // removes the first element
myarray.reverse() // reverses the order of the elements in the array

// GETTING A RETURN VALUE
myarray.includes(5) // return boolean if the element is present in the array
myarray.indexOf(3)  // returns index of the element in the array
myarray.slice('startingIndex','endingIndex') // returns a new subarray between given indices. The array itself doesnot change.
myarray.splice('startingIndex','numberOfElements') // returns an array from specifying starting index and total number of elements from starting index.
// This method does alter the array itself by plucking the elements from it.

myarray.concat('anotherArray') // concat returns an array which contains elements from both myarray and anotherArray.
