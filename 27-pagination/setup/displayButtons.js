const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, i) => {
    return `
      <button class="page-btn${
        activeIndex === i ? " active-btn" : ""
      }" data-index=${i + 1}>${i + 1}</button>
    `
  })
  btns.push(`<button class='next-btn'>next</button>`)
  btns.unshift(`<button class='prev-btn'>prev</button>`)
  container.innerHTML = btns.join("")
}

export default displayButtons
