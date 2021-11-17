import scroll from "./modules/scroll"

document.body.addEventListener("click", e => {
    const targ = e.target

    scroll(e, targ)
})