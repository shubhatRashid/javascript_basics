let clicked = 0
let invoked = 0
document.getElementById('button').onclick = function() {
    clicked += 1
    document.getElementById('clicked').innerHTML = `button clicked ${clicked} times`
 }

 document.getElementById('button').addEventListener('mouseleave',()=>{
    setTimeout(()=> {
        invoked += 1
        document.getElementById('invoked').innerHTML = `button invoked ${invoked} times`
    },1000)
 }
)
