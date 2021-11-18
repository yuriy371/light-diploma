const modal = (e, targ) => {
    let modalCallback = document.querySelector(".modal-callback")
    let modalOverlay = document.querySelector(".modal-overlay")

    if (targ.matches(".callback-btn")) {
        e.preventDefault()
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
    } else if (!targ.closest(".modal-overlay") || !targ.classList.contains("modal-close")) {
        modalCallback.style.display = "none"
        modalOverlay.style.display = "none"
    } else {
        return
    }

    if (targ.matches(".img-wrapper")) {
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
    }else if (targ.matches(".button-services")) {
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
    } else {
        return
    }
}

export default modal