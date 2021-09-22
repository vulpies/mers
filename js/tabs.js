const tabsHandElems = document.querySelectorAll("[data-tabs-handler]")
// console.log(tabsHandElems, "tabs") получаем обе кнопки с данным классом

const tabsContentElems = document.querySelectorAll("[data-tabs-field]")

const sectionTitle = document.querySelectorAll(".section__title")

console.log(tabsContentElems)

for (let btn of tabsHandElems) {
    btn.addEventListener("click", () => {
        tabsHandElems.forEach((item) => {
            item.classList.remove("design-list__item_active")
            btn.classList.add("design-list__item_active")

            tabsContentElems.forEach((content) => {
                if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                    content.classList.remove("hidden")
                } else {
                    content.classList.add("hidden")
                }
            })
        })
    })
}

// design-list__item_active
