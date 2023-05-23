const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id
  if (id) {
    // remove all active from buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active")
    })
    e.target.classList.add("active")
    articles.forEach(function (article) {
      article.classList.remove("active")
    })
    document.getElementById(id).classList.add("active")
  }
})
