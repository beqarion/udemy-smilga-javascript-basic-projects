const paginate = (followers) => {
  const itemsPerPage = 7
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, i) => {
    return followers.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  })

  return newFollowers
}

export default paginate
