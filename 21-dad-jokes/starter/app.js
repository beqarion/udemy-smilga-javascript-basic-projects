const url = "https://icanhazdadjoke.com/sss"

const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", () => {
  fetchDadJoke()
})

const fetchDadJoke = async () => {
  result.textContent = "Loading..."
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    })
    if (!response.ok) {
      throw new Error("errorasdfasdf")
    }
    const data = await response.json()
    result.textContent = data.joke
  } catch (error) {
    console.log(error)
    result.textContent = "There was and error..."
  }
}

fetchDadJoke()
