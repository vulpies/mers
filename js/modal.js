/* вариант через крестик
const modalClose = document.querySelector(".modal__close")
modalClose.addEventListener("click", () => {
    modalWindow.classList.add("hidden")
}) */

const modalBtn = document.querySelector(".more")
const modalWindow = document.querySelector(".modal")

modalBtn.addEventListener("click", () => {
    modalWindow.classList.remove("hidden")
})

modalWindow.addEventListener("click", (e) => {
    const target = e.target
    if (
        target.classList.contains("overlay") ||
        target.classList.contains("modal__close")
    ) {
        modalWindow.classList.add("hidden")
    }
})
