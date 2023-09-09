import { getElement } from "./utils/getElement.js"
import { getUser } from "./utils/fetchUser.js"
import { displayUser } from "./utils/displayUser.js"

const btn = getElement(".btn")

const showUser = async () => {
  // get user from api
  const person = await getUser()
  // display user
  displayUser(person)
}

window.addEventListener("DOMContentLoaded", showUser)
btn.addEventListener("click", showUser)
