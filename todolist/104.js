/*const form=document.getElementById('form')
const todolist=document.getElementById('todolist')
const newtodo=document.getElementById('new')

form.addEventListener('submit',addtodo)
todolist.addEventListener('click',handleclick)

function addtodo(event){
    event.preventDefault()
    const text=newtodo.value

    const li =document.createElement('li')
    const h3=document.createElement('h3')
    h3.innerHTML=text
    li.appendChild(h3)

    const button =document.createElement('button')
    button.classList.add('deleteButton')
    button.innerHTML ='DELETE'
    li.appendChild(button)

    todolist.appendChild(li)
}


function handleclick(event){
    if(event.target.tagName === 'BUTTON')
        {
            const near=event.target.closest('li')
            near.remove()
        }
}*/
const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-clipboard-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-square-minus"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
    inputtdl.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)