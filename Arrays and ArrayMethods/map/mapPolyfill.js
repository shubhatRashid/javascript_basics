// HOW MAP WORKS UNDER THE HOOD
// {
//     // Creating a copy of map method

//     nums = [1,2,3,4]

//     // .prototype lets us create custom methods for arrays
//     Array.prototype.mapCopy = function(callback){
//         let newArr = [] // arr to return
//         for (let i=0; i<this.length;i++){ // iterating
//             var res = callback(this[i],i,this) //executing the callback function
//             newArr.push(res)    // storing the result
//         }
//         return newArr
//     }

//     var result = nums.mapCopy((n,i)=>n*2)
//     console.log(result)
// }