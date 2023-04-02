const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
  let hexCode = `
    #${hex[getRandomNumber()]}${hex[getRandomNumber()]}${
    hex[getRandomNumber()]
  }${hex[getRandomNumber()]}${hex[getRandomNumber()]}${hex[getRandomNumber()]}
  `
  document.body.style.backgroundColor = hexCode
  color.textContent = hexCode
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
