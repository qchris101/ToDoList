// Selects our form via ID
const form = document.querySelector("#todoForm")
// selects the input inside of the form via ID
const input = document.querySelector("#todoInput")
// Selects the list element via Id
const div = document.querySelector("#mainDiv")
// Selecting the ordered list which we later append to 
const todoList = document.querySelector("#list")
// On submit create new Li and add it our ordered list 

// const createDelBttn = () => {
//     const delBttn = document.createElement("button")
//     delBttn.textContent = "Delete ToDo"
//     delBttn.style.marginLeft = "10px"
//     delBttn.style.backgroundColor = "White"
//     delBttn.style.borderRadius = "5px"
//     delBttn.style.color = "black"   
// }


form.addEventListener("submit", function(e) {
    e.preventDefault()
    const newLi = document.createElement("li")
    newLi.textContent = input.value

    const delBttn = document.createElement("button")
    delBttn.textContent = "Delete ToDo"
    delBttn.style.marginLeft = "10px"
    delBttn.style.backgroundColor = "White"
    delBttn.style.borderRadius = "5px"
    delBttn.style.color = "black"   

    delBttn.addEventListener("click", function(e){
        e.preventDefault()
        newLi.remove()
    })
    newLi.appendChild(delBttn)

    todoList.appendChild(newLi)

    input.value = ""
})