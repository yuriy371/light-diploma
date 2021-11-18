const scrollView = () => {
    let btnUp = document.querySelector(".up")

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 600) {
            btnUp.classList.add("view")
        } else {
            btnUp.classList.remove("view")
        }
    })
}

export default scrollView