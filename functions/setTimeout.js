for (let i =0;i<5;i++){
    setTimeout(()=> {
        console.log(i)
    },i*1000)
}

// let has block scope which forces settimeout to use new value of i each time 

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
// var has functional scope so settimeout runs independent of var and runs asynchronously and hence loop end at value 5 which is printed
// Even in 0 time settimeout runs independent of 
// for loop as it behaves asynchronous