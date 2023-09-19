import { hideLoading } from "./toggleLoading.js"
import get from "./getElement.js"
export const displaySingleDrink = ({ drinks: [drink] }) => {
  console.log(drink)
  hideLoading()
  const section = get(".single-drink")

  const {
    strDrinkThumb: img,
    strDrink: name,
    strInstructions: instructions,
  } = drink
  const ingredients = []

  for (const [key, value] of Object.entries(drink)) {
    if (key.includes("strIngredient") && drink[key]) {
      ingredients.push(value)
    }
  }
  const ingredientsHTML = ingredients
    .map((i) => `<li><i class='far fa-check-square'></i>${i}</li>`)
    .join("")

  const image = get(".drink-img")
  const drinkName = get(".drink-name")
  const description = get(".drink-desc")
  const DOMIngredients = get(".drink-ingredients")

  image.src = img
  drinkName.textContent = name
  description.textContent = instructions
  DOMIngredients.innerHTML = ingredientsHTML
}
