import scroll from "./modules/scroll"
import modal from "./modules/modal"
import slider from "./modules/slider"
import sliderCarusel from "./modules/sliderCarusel"
import accordeon from "./modules/accordeon"

slider(".top-slider",".table",".dots")
sliderCarusel(".services-arrow",".element.relative")

document.body.addEventListener("click", e => {
    const targ = e.target

    scroll(e, targ)
    modal(e, targ)
    accordeon(e, targ)

    // console.log(targ);
})