// Selects our form via ID
const form = document.querySelector("#todoForm")
// selects the input inside of the form via ID
const input = document.querySelector("#todoInput")
// const div = document.querySelector("#mainDiv")
// Selecting the ordered list which we later append to 
const todoList = document.querySelector("#list")

// Function that creates and defines a delete button.
function createDelBttn() {
    // Creates a new button element.
    const delBttn = document.createElement("button")
    // Sets the text inside our button element.
    delBttn.textContent = "Delete Task"
    // Assigns attributes to our button.
    Object.assign(delBttn.style, {
        marginLeft: "10px",
        backgroundColor: "white",
        borderRadius: "5px",
        color: "black",
        border: "1px solid black",
        cursor: "pointer",
        padding: "5px 10px"    
    })
    return delBttn
}
//On submit create an li,with the user's value, also create a delete button,
//append button to li, then the Li to the ordered List.
//Resets input value after every instance.

form.addEventListener("submit", function(e) {
    e.preventDefault()
    // On submit create new Li
    const newLi = document.createElement("li")
    // Sets the text value to whatever our user enters.
    newLi.textContent = input.value

    // Old style would create Delete Button on the form submit,
    // Shorted with a function defining the attributes of the button

    // const delBttn = document.createElement("button")
    // delBttn.textContent = "Delete ToDo"
    // delBttn.style.marginLeft = "10px"
    // delBttn.style.backgroundColor = "White"
    // delBttn.style.borderRadius = "5px"
    // delBttn.style.color = "black"   

    // Calls the createDelBttn deffined above
    const delBttn = createDelBttn()
    // on the click event remove the Li the button was created with.
    delBttn.addEventListener("click", function(e){
        e.preventDefault()
        newLi.remove()
    })
    // appends the button to li with the Li as the "parent"
    newLi.appendChild(delBttn)
    // appends the li (also with the button) to the ordered list "parent hierarchy"
    todoList.appendChild(newLi)
    // sets the input value back to empty.
    input.value = ""
})