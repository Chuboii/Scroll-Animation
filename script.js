let items = document.querySelectorAll(".item")

window.addEventListener("scroll", () => {
    let windowHeight = scrollY

    items.forEach(item => {
        let rect = item.getBoundingClientRect()
        let top = rect.top

        if (windowHeight > top) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
})