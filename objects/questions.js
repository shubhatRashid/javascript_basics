// QUESTION : 01 
    // {
    //     // guess the output
    //     const obj = {
    //         a : 1,
    //         b : 2,
    //         a : 4
    //     }
    //     // console.log(obj)
    //     // solution : in output a will be 4 as it is reassigned a value 4 later
    // }

// QUESTION : 02
    // {
    //     const obj = {
    //         a : 100,
    //         b : 200,
    //         c : 'hello'
    //     }

    //     // multiply numeric elements by 2
    //     // solution
    //     for (key in obj){
    //         if (typeof obj[key] == 'number'){
    //             obj[key] *= 2
    //         }
    //     }
    //     // console.log(obj)
    // }

// QUESTION : 03
    // {
    //     const a = {}
    //     const b = {key:'b'}
    //     const c = {key:'c'}
    //     a[b]=123
    //     a[c] = 456
    //     // console.log(a[b])
    //     // guess output
    //     // solution:
    //         // output is 456
    //         // explanation :
    //         // we use b as key and assign it value as 123 however a key
    //         // should be a string only therefore the key stored is [object object]
    //         // next we again use c as a key which is again an object and hence also
    //         // represents [object object ] key and is updated as 456 hence the output
    //         // is 456

    // }

// QUESTION : 04
    // {
    //     // console.log([...'shubhat'])
    //     // guess output
    //     // ans : spreads all the charactes of the string
    // }

// QUESTION : 05 
    // {
    //     const shape = {
    //         radius:10,
    //         diameter(){
    //             return this.radius*2;
    //         },
    //         perimeter: () => {
    //             console.log(this.radius)
    //             return this.radius *2 * Math.PI
    //         }
    //     }
    //     // what would be the output of this code
    //     // console.log(shape.diameter()) -> 20
    //     // console.log(shape.perimeter()) -> NaN
    //     // arrow function doesnot support 'this' and 'args keyword,
    //     // this keyword in arrow function refers to window object
    // }

// QUESTION : 06 
    // {
    //     // Destructuring
    //     let user = {
    //         Name : 'shubhat',
    //         age : 24,
    //         hobbies : {
    //             game : 'cricket',
    //             work : 'coding',
    //             extra : 'cycling'
    //         }
    //     }

    //     // a) Destructure the object
    //             // const {Name,age} = user
    //             // console.log(Name)

    //     // b) If a variable of name same as property of object exists
    //     //    How to change the destructured property name then?
    //             // let Name = 'coding'
    //             // const {Name:firstName,age} = user
    //             // console.log(firstName,Name)

    //     // c) Destructure hobbies objects properties
    //             //  const {hobbies:{game,work,extra}} = user
    //             //  console.log(work)

    // }
