let clicked = 0
let invoked = 0
var debounced = _.debounce(()=> {
    invoked += 1
    document.getElementById('invoked').innerHTML = `button invoked ${invoked} times`
},800);
document.getElementById('button').onclick = function() {
    clicked += 1
    document.getElementById('clicked').innerHTML = `button clicked ${clicked} times`
    debounced()
 }

