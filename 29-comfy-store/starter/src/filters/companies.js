import { getElement } from "../utils.js"
import display from "../displayProducts.js"

const setupCompanies = (store) => {
  let companies = [
    "all",
    ...new Set(
      store.map((product) => {
        return product.company
      })
    ),
  ]

  const companiesDOM = getElement(".companies")

  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`
    })
    .join("")

  companiesDOM.addEventListener("click", function (event) {
    const element = event.target
    if (element.classList.contains("company-btn")) {
      let newStore = []
      if (element.textContent === "all") {
        newStore = [...store]
      } else {
        newStore = store.filter((product) => {
          return product.company === event.target.textContent
        })
      }
      display(newStore, getElement(".products-container"))
    }
  })
}

export default setupCompanies
