let clicked = 0
let invoked = 0
const mydebounce = (cb,delay) => {
    let timer 
    return function(...args) {
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=> {
            cb(...args)
        },delay)
    }
}

var debounced = mydebounce(()=> {
    invoked += 1
    document.getElementById('invoked').innerHTML = `button invoked ${invoked} times`
},800);

document.getElementById('button').onclick = function() {
    clicked += 1
    document.getElementById('clicked').innerHTML = `button clicked ${clicked} times`
    debounced()
 }

