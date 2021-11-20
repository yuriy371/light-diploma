const modileMenu = (e, targ) => {
    let menuMob = document.querySelector(".mobile-menu")
    
    if (targ.closest(".mob-menu-btn")) {
        menuMob.classList.add("open")
    } else if (targ.closest(".mobile-menu-close") || targ.closest(".overlay")) {
        menuMob.classList.remove("open")
    } else if (targ.matches("ul>li>a")) {
        e.preventDefault()
        menuMob.classList.remove("open")
    } else if (targ.matches(".callback-btn")) {
        menuMob.classList.remove("open")
    }
}

export default modileMenu
