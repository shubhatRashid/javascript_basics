// HOW FILTER WORKS AND CREATING A CUSTOM COPY OF FILTER FUNCTION

nums = [1,2,3,4]

Array.prototype.filterCopy = function(callback){
    let newArr = []
    for (let i = 0;i<this.length;i++){
        if (callback(this[i],i,this)){
            newArr.push(this[i])
        }
    }
    return newArr
}

var res = nums.filterCopy((n,i) => n<=1)
console.log(res)