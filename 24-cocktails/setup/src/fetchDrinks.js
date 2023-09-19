import { showLoading } from "./toggleLoading.js"

export const fetchDrinks = async (url) => {
  showLoading()
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
