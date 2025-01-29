// Selects our form via ID
const form = document.querySelector("#todoForm")
// selects the input inside of the form via ID
const input = document.querySelector("#todoInput")
// Selects the list element via Id
const div = document.querySelector("#mainDiv")
// Selecting the ordered list which we later append to 
const todoList = document.querySelector("#list")
// On submit create new Li and add it our ordered list 

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const newLi = document.createElement("li")
    newLi.textContent = input.value
    todoList.append(newLi)
    input.value = ""
})