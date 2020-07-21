const buttonSearch = document.querySelector("#page-home main a")

const modal = document.querySelector("#modal")

const close = document.querySelector("#modal .header a")

// fechar o modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

// abrir o modal
close.addEventListener("click", () => {
    modal.classList.add("hide")
})