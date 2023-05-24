const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2023, 4, 24, 16, 24)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

const period = hours >= 0 && hours < 12 ? "AM" : "PM"

const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${year} ${hours}:${minutes}${period}`

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()

  const t = futureTime - today

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  // calculate all values
  const days = Math.floor(t / oneDay)
  const hours = Math.floor((t % oneDay) / oneHour)
  const minutes = Math.floor((t % oneHour) / oneMinute)
  const seconds = Math.floor((t % oneMinute) / 1000)

  // set values array
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()
