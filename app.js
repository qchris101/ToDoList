// Selects our form via ID
const form = document.querySelector("#todoForm")
// selects the input inside of the form via ID
const input = document.querySelector("#todoInput")
// Selects the list element via Id
const li = document.querySelector("#listTest")
form.addEventListener("submit", function(e) {
    e.preventDefault()
    li.append(input.value)
})