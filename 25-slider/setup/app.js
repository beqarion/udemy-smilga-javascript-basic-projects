import { people } from "./data.js"
const container = document.querySelector(".slide-container")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

container.innerHTML = people
  .map((person, i, arr) => {
    const { img, name, job, text } = person
    let position = "next"
    if (i === 0) {
      position = "active"
    }
    if (i === arr.length - 1) {
      position = "last"
    }
    return `
  <article class="slide ${position}">
            <img
              class="img"
              src=${img}
              alt=${name}
            />
            <h4>${name}</h4>
            <p class="title">${job}</p>
            <p class="text">
              ${text}
            </p>
            <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
          </article>`
  })
  .join("")

const startSlider = (type) => {
  const active = document.querySelector(".active")
  const last = document.querySelector(".last")
  let next = active.nextElementSibling
  if (!next) {
    next = container.firstElementChild
  }
  active.classList.remove("active")
  last.classList.remove("last")
  next.classList.remove("next")

  if (type === "prev") {
    active.classList.add("next")
    last.classList.add("active")
    next.classList.add("last")

    return
  }

  active.classList.add("last")
  last.classList.add("next")
  next.classList.add("active")
}

nextBtn.addEventListener("click", () => {
  startSlider()
})
prevBtn.addEventListener("click", () => {
  startSlider("prev")
})
