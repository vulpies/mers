const btns = document.querySelectorAll(".feature__link")
const lists = document.querySelectorAll(".feature-sub")

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn) => {
            btn.classList.remove("feature__link_active")
        })
        btn.classList.add("feature__link_active")

        lists.forEach((list) => {
            list.classList.add("hidden")
        })
        lists[i].classList.remove("hidden")
    })
})
