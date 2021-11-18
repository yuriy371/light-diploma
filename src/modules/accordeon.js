const accordeon = (e, targ) => {
    let accordeon = document.querySelector(".accordeon")
    let accordElem = accordeon.querySelectorAll(".element")
    let accordText = accordeon.querySelectorAll(".element-content")

    if (targ.closest(".element")) {
        let tabsBtn = targ.closest(".element")

        accordElem.forEach((tab, index) =>{
            if (tab === tabsBtn) {
                tab.classList.add("active")
                accordText[index].classList.add("active")
            } else {
                tab.classList.remove("active")
                accordText[index].classList.remove("active")
            }
        })
    }
}

export default accordeon