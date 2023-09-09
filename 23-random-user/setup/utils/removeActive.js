export const removeActive = (items) => {
  items.forEach((item) => {
    item.classList.remove("active")
  })
}
