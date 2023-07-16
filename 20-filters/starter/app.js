let filteredProducts = [...products]

const productsContainer = document.querySelector(".products-container")

const displayProducts = () => {
  // if statement
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`
    return
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id=${id}>
    <img
      src=${image}
      class="product-img img"
    />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">$${price}</span>
    </footer>
  </article>`
    })
    .join("")
}
displayProducts()

// Text Filter
const form = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

form.addEventListener("keyup", () => {
  console.log("keyUpEd")
  const inputValue = searchInput.value
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue)
  })
  displayProducts()
})

// Filter Buttons

const companiesDOM = document.querySelector(".companies")

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(
      products.map((product) => {
        return product.company
      })
    ),
  ]
  console.log(buttons)
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button
    class="company-btn"
    data-id="${company}"
  >
    ${company}
  </button>`
    })
    .join("")
}
displayButtons()

// Filter baset on Company
companiesDOM.addEventListener("click", (event) => {
  const target = event.target
  if (!target.classList.contains("company-btn")) {
    return
  }
  searchInput.value = ""
  if (target.dataset.id === "all") {
    filteredProducts = [...products]
    displayProducts()
    return
  }
  filteredProducts = products.filter((product) => {
    return product.company === target.dataset.id
  })
  displayProducts()
})
