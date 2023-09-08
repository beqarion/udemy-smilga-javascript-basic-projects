const url = "https://course-api.com/javascript-store-products"

const productsDOM = document.querySelector(".products-center")

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">there was an error</p>`
  }
}

const displayProducts = (list) => {
  const products = list
    .map((product) => {
      // id, imgurl, name, price
      const {
        id,
        fields: {
          image: [{ url }],
          name,
          price,
        },
      } = product
      const formatPrice = price / 100
      return `
    <!-- single product -->
          <a
            href="product.html"
            class="single-product"
          >
            <img
              src=${url}
              alt=""
              class="single-product-img img"
            />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>
          <!-- end of single product -->
    `
    })
    .join("")
  productsDOM.innerHTML = `<div class="products-container">${products}</div>`
}

const start = async () => {
  const data = await fetchProducts()
  displayProducts(data)
}

start()
