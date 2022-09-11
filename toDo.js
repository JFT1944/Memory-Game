const form = document.querySelector('form')
const list = document.querySelector('#list')
let count = 0

//displaying local storage




form.addEventListener('submit', (e)=>{
e.preventDefault()

console.log(document.querySelector('#list-input').value)
const listInput = document.querySelector('#list-input')
const newLi = document.createElement('li')
const fButton = document.createElement('button')
const newButton = document.createElement('button')
newLi.innerText = listInput.value;
fButton.innerText = "Finished"
newButton.innerText = 'remove'
newLi.append(fButton)
newLi.append(newButton);
count++

console.log(count)
list.append(newLi);
form.reset()
})


list.addEventListener('click', (e)=>{
    if(e.target.innerText === 'Finished'){
        e.target.parentElement.setAttribute('class', 'strike')
  } else{
    e.target.parentElement.remove()
    }
})







document.getElementById('cls').addEventListener('click', ()=>{
    localStorage.clear()
})
