import { fetchDrinks } from "./fetchDrinks.js"

export const presentDrinks = async (url) => {
  const data = await fetchDrinks(url)
  // display drinks
  console.log(data)
}
