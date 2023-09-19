import get from "./getElement.js"
import { hideLoading } from "./toggleLoading.js"

export const displayDrinks = async ({ drinks }) => {
  const section = get(".section-center")
  const title = get(".title")
  if (!drinks) {
    title.textContent = "sorry, no drink matched your search"
    section.innerHTML = null
    hideLoading()
    return
  }
  const newDrinks = drinks
    .map((drink) => {
      const { strDrinkThumb: image, strDrink: name, idDrink: id } = drink
      return `<!-- single drink -->
    <a href="drink.html">
      <article
        class="cocktail"
        data-id="${id}"
      >
        <img
          src=${image}
          alt=${name}
        />
        <h3>${name}</h3>
      </article>
    </a>
    <!-- end of single drink -->`
    })
    .join("")
  hideLoading()
  title.textContent = ""
  section.innerHTML = newDrinks
  return section
}
