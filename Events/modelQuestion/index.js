let model = document.getElementById('model')
let button = document.getElementById('button')

button.addEventListener('click',(event)=> {
    event.stopPropagation()
    model.style.display = 'block'
})

document.getElementById('model').addEventListener('click',(event)=> {
    event.stopPropagation()
})

document.addEventListener('click',(event) => {
    if (event.target.id != 'model' || event.target.id != 'button' ){
        model.style.display = 'none'
    }
})

