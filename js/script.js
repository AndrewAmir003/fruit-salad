const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

const fruitNutrition = document.querySelector("#nutritionSection p")


// const deleteEvent = event => {
//     if(!confirm("Do you wish to remove this item?")) {
//         return
//     }
//     event.target.removeEventListener("click", deleteEvent)
//     event.target.remove()
// }

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`) // send request to url. Once data is received then move to .then
    .then(resp => resp.json()) // these are asynchronous functions
    .then(data => addFruit(data))
    .catch(e => console.error(e))
}

let totalCal = 0,
totalCarb = 0,
totalFat = 0,
totalPro = 0,
totalSug = 0

const addFruit = (fruit) => {
    const li = document.createElement("li") // creating list item
    li.textContent = fruit.name
    // li.addEventListener("click", deleteEvent)
    fruitList.appendChild(li) // add to the end of the list

    totalCal += fruit.nutritions.calories 
    totalCarb += fruit.nutritions.carbohydrates
    totalFat += fruit.nutritions.fat
    totalPro += fruit.nutritions.protein
    totalSug += fruit.nutritions.sugar
   
    fruitNutrition.textContent = `Calories: ${totalCal},\n
    Carbohydrates: ${totalCarb},\n
    Fat: ${totalFat},\n 
    Protein: ${totalPro},\n 
    Sugar: ${totalSug}`

}

fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})

const removeFruit = e => {
    e.target.remove();
  }
  fruitList.addEventListener('click', removeFruit)
