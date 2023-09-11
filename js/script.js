const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

// const deleteEvent = event => {
//     if(!confirm("Do you wish to remove this item?")) {
//         return
//     }
//     event.target.removeEventListener("click", deleteEvent)
//     event.target.remove()
// }

const removeFruit = e => {
    e.target.remove();
  }

const addFruit = (fruit) => {
    const li = document.createElement("li") // creating list item
    li.textContent = fruit
    // li.addEventListener("click", deleteEvent)
    fruitList.appendChild(li) // add to the end of the list
    fruitList.addEventListener('click', removeFruit)
}

fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
