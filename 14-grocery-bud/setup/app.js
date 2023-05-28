// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")
const submitBtn = document.querySelector(".submit-btn")

// edit option
let editElement
let editFlag = false
let editID = ""
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem)
// clear items
clearBtn.addEventListener("click", clearItems)
// load items
window.addEventListener("DOMContentLoaded", setupItems)
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault()
  const value = grocery.value
  const id = new Date().getTime().toString()
  if (value && !editFlag) {
    createListItem(id, value)
    // display alert
    displayAlert("item added to the list", "success")
    // show container
    container.classList.add("show-container")
    // add to local storage
    addToLocalStorage(id, value)
    // set back to default
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.innerHTML = value
    displayAlert("value changed", "success")
    // edit local storage
    editLocalStorage(editID, value)
    setBackToDefault()
  } else {
    displayAlert("please enter value", "danger")
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)
  // remove alert
  setTimeout(function () {
    alert.textContent = ""
    alert.classList.remove(`alert-${action}`)
  }, 2500)
}
// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item")

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
    container.classList.remove("show-container")
    displayAlert("list is empty", "danger")
    setBackToDefault()
    localStorage.removeItem("list")
  }
}
// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove("show-container")
  }
  displayAlert("item removed", "danger")
  setBackToDefault()
  // remove from localStorage
  removeFromLocalStorage(id)
}
// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling
  // set form value
  grocery.value = editElement.innerText
  grocery.focus()
  editFlag = true
  editID = id
  submitBtn.textContent = "edit"
}
// set back to default
function setBackToDefault() {
  grocery.value = ""
  editFlag = false
  editID = ""
  submitBtn.textContent = "submit"
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value }
  let items = getLocalStorage()
  items.push(grocery)
  localStorage.setItem("list", JSON.stringify(items))
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage()
  items = items.filter(function (item) {
    return item.id !== id
  })
  localStorage.setItem("list", JSON.stringify(items))
}
function editLocalStorage(id, value) {
  let items = getLocalStorage()
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem("list", JSON.stringify(items))
}
function getLocalStorage() {
  return !localStorage.getItem("list")
    ? []
    : JSON.parse(localStorage.getItem("list"))
}
// localstorage API
// setItem
// getItem
// removeItem
// save as strings

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage()
  if (items.length > 0) {
    container.classList.add("show-container")
    items.forEach(function (item) {
      createListItem(item.id, item.value)
    })
  }
}

function createListItem(id, value) {
  const element = document.createElement("article")
  // add class
  element.classList.add("grocery-item")
  // add ID
  const attr = document.createAttribute("data-id")
  attr.value = id
  element.setAttributeNode(attr)
  element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `
  const deleteBtn = element.querySelector(".delete-btn")
  const editBtn = element.querySelector(".edit-btn")
  deleteBtn.addEventListener("click", deleteItem)
  editBtn.addEventListener("click", editItem)
  // append child
  list.appendChild(element)
}
