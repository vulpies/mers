const btns = document.querySelectorAll(".feature__link")
const lists = document.querySelectorAll(".feature-sub")

/* btns.forEach((btn, i) => {
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
обычный аккорден, открытая вкладка не закрывается по клику на нее*/

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btns.forEach((btnItem, idx) => {
            if (btnItem === btn) {
                btnItem.classList.toggle("feature__link_active")
                lists[idx].classList.toggle("hidden")
            } else {
                btnItem.classList.remove("feature__link_active")
                lists[idx].classList.add("hidden")
            }
        })
    })
})

// все вкладки закрываются по клику
