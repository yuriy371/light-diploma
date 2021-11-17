import scroll from "./modules/scroll"
import modal from "./modules/modal"
import slider from "./modules/slider"
slider(".top-slider",".table",".dots")
document.body.addEventListener("click", e => {
    const targ = e.target

    scroll(e, targ)
    modal(e, targ)
})