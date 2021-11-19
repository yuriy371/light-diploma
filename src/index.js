import scroll from "./modules/scroll"
import modal from "./modules/modal"
import slider from "./modules/slider"
import sliderCarusel from "./modules/sliderCarusel"
import accordeon from "./modules/accordeon"
import scrollView from "./modules/scrollView"
import sendForm from "./modules/sendForm"

slider(".top-slider", ".table", ".dots")
sliderCarusel(".services-arrow", ".element.relative")
scrollView()
sendForm()

document.body.addEventListener("click", e => {
    const targ = e.target

    scroll(e, targ)
    modal(e, targ)
    accordeon(e, targ)
    // alert(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    // alert(document.documentElement.clientWidth)
    // console.log(targ);
})