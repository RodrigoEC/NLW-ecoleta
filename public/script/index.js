const popUp = document.querySelector("#pesquisa")
const modal = document.querySelector("#modal")
const chut = document.querySelector("#modal .header a")

popUp.addEventListener("click", addHiddenClass)

function addHiddenClass(event) {
    modal.classList.remove("hide")
}

chut.addEventListener("click", () => {
    modal.classList.add("hide")
})