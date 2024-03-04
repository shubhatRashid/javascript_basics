for (let i =0;i<5;i++){
    setTimeout(()=> {
        console.log(i)
    },i*1000)
}

// output = 0,1,2,3,4

for (var i =0;i<5;i++){
    setTimeout(()=> {
        console.log(i)
    },i*1000)
}
// output = 5,5,5,5,5

for (var i =0;i<5;i++){
    setTimeout(()=> {
        console.log(i)
    })
}
// output = 5,5,5,5,5
// Even in 0 time settimeout runs independent of 
// for loop as it behaves asynchronous