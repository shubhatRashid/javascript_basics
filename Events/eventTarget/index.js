let div = document.getElementById('div')
let form = document.getElementById('form')
let button = document.getElementById('button')

const func = function(event){
    event.preventDefault()
    alert('currTarget ' + event.currentTarget.tagName + 'target ' + event.target.tagName + 'this ' + this.tagName)       
}

div.addEventListener('click',func)
form.addEventListener('click',func)
button.addEventListener('click',func)

