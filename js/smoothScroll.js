const linksHead = document.querySelectorAll(".menu-list__link")
const mainScroll = document.querySelector(".main__scroll")
const newArray = [...linksHead, mainScroll]

newArray.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault()

        const ID = event.target.getAttribute("href").substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})
