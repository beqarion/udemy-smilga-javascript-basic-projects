import { getElement } from "./getElement.js"
import { removeActive } from "./removeActive.js"

const img = getElement(".user-img")
const value = getElement(".user-value")
const title = getElement(".user-title")

const btns = [...document.querySelectorAll(".icon")]

export const displayUser = (person) => {
  img.src = person.image
  value.textContent = person.name
  title.textContent = `My name is`
  removeActive(btns)
  btns[0].classList.add("active")
  btns.forEach((btn) => {
    const label = btn.dataset.label
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`
      value.textContent = person[label]
      removeActive(btns)
      btn.classList.add("active")
    })
  })
}
