const URL = "https://randomuser.me/api"

export const getUser = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  // destructure
  const person = data.results[0]
  const {
    phone,
    email,
    picture: { large: image },
    login: { password },
    name: { first, last },
    dob: { age },
    location: {
      street: { number, name: streetName },
    },
  } = person
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${streetName}`,
    name: `${first} ${last}`,
  }
}
