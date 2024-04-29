let clicked = 0
let invoked = 0
document.getElementById('button').onclick = function() {
    clicked += 1
    document.getElementById('clicked').innerHTML = `button clicked ${clicked} times`
    setInterval(() => {
        if (document.getElementById('button').clicked){
            invoked += 1
            document.getElementById('invoked').innerHTML = `button invoked ${clicked} times`
        }
    },2000)
 }

