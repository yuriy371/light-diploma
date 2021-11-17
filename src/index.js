import scroll from "./modules/scroll"
import modal from "./modules/modal"



document.body.addEventListener("click", e => {
    const targ = e.target

    scroll(e, targ)
    modal(e, targ)
})