const productDOM = document.querySelector(".product")
const url = "https://course-api.com/javascript-store-single-product"

const fetchProduct = async () => {
  productDOM.innerHTML = `<div class="loading"></div>`
  // console.log(window.location.search)
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  const resp = await fetch(`${url}?id=${id}`)
  const data = await resp.json()
  return data
  try {
  } catch (error) {}
}

const displayProduct = (product) => {
  // img, title, company,price,description
  const {
    fields: {
      image: [{ url }],
      name,
      company,
      price,
      description,
      colors,
    },
  } = product
  const colorsHTML = colors
    .map((color) => {
      return `<span class="product-color" style='background-color: ${color};'></span>`
    })
    .join("")
  document.title = name.toUpperCase()
  const productComponent = `
  <div class="product-wrapper">
        <img
          src="${url}"
          alt="${name}"
          class="img"
        />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">${colorsHTML}</div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`

  productDOM.innerHTML = productComponent
}

const start = async () => {
  try {
    const data = await fetchProduct()
    displayProduct(data)
  } catch (error) {
    productDOM.innerHTML = `<p class="error">there was an error</p>`
  }
}

start()
