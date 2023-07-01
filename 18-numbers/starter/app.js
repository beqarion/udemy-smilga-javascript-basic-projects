const numbers = [...document.querySelectorAll(".number")]

const updateCount = (el) => {
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 1000)
  let initialValue = 0

  const increaseValue = setInterval(() => {
    initialValue += increment
    if (initialValue > value) {
      el.textContent = `${value}+`
      return
    }
    el.textContent = `${initialValue}+`
  }, 1)
}
numbers.forEach((el) => {
  console.log(el)
  updateCount(el)
})
