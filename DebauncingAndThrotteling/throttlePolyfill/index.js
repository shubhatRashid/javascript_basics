let clicked = 0
let invoked = 0
const mythrottle = (cb,delay) => {
    let last = 0
    return function(...args) {
        let now = new Date().getTime()

        if (now-last < delay)return;
        last = now
        return cb(...args)
    }
}

var throttle = mythrottle(()=> {
    invoked += 1
    document.getElementById('invoked').innerHTML = `button invoked ${invoked} times`
},800);

document.getElementById('button').onclick = function() {
    clicked += 1
    document.getElementById('clicked').innerHTML = `button clicked ${clicked} times`
    throttle()
 }

