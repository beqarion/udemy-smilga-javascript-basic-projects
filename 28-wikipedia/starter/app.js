const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch="

const formDOM = document.querySelector(".form")
const inputDOM = document.querySelector(".form-input")
const resultDOM = document.querySelector(".results")

formDOM.addEventListener("submit", (event) => {
  event.preventDefault()
  const value = inputDOM.value
  if (!value) {
    resultDOM.innerHTML = `<div class='error'>please enter valid search term</div>`
    return
  }
  fetchPages(value)
})

const fetchPages = async (searchValue) => {
  resultDOM.innerHTML = `<div class='loading'></div>`
  try {
    const response = await fetch(`${url}${searchValue}`)
    const data = await response.json()
    const results = data.query.search

    if (results.length < 1) {
      resultDOM.innerHTML = `<div class='error'>No matching results. Please try again</div>`
    }

    renderResults(results)
  } catch (error) {
    resultDOM.innerHTML = `<div class='error'>there was an error</div>`
  }
}

const renderResults = (list) => {
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item
      return `<a href=http://en.wikipedia.org/?curid=${pageid};>
    <h4>${title}</h4>
    <p>
      ${snippet}
    </p>
  </a>`
    })
    .join("")

  resultDOM.innerHTML = `<div class="articles">
  ${cardsList}
  </div>`
}
