const url = "https://icanhazdadjoke.com/"

const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", () => {
  result.innerHTML = "asfasdf"
})

const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  })
  const data = await response.json()
}

fetch(url, {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
