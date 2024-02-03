// HOW REDUCE WORKS AND MAKE A CUSTOM REDUCE FUNCTION

Array.prototype.reduceCopy = function(callback,initialValue){
    var accumulator = initialValue ? initialValue : this[0]
    for (let i=0;i<this.length;i++){
        accumulator = callback(accumulator,this[i],i,this)
    }

    return accumulator
}

var nums = [1,2,3,4]
var result = nums.reduceCopy((total,n,i)=>{
    total = total*n
    return total
},2)
console.log(result)
