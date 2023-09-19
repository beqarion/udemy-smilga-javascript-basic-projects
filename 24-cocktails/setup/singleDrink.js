import { fetchDrinks } from "./src/fetchDrinks.js"
import { displaySingleDrink } from "./src/displaySingleDrink.js"

const presentDrink = async () => {
  const id = localStorage.getItem("drink")
  if (!id) {
    window.location.replace("index.html")
  }
  const data = await fetchDrinks(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  )
  displaySingleDrink(data)
}

window.addEventListener("DOMContentLoaded", presentDrink)
