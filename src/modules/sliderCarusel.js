const sliderCarusel = (classSliderBlock, classSlides, classDots = "dot", slideAct = "active", dotAct = "dot-active") => {
    let sliderBlock = document.querySelector(classSliderBlock)
    let slides = document.querySelectorAll(classSlides)

    let currentSlide = 0

    let prevSlide = (elems, index, strClass) => {
        if (index === 0) {
            for (let index = 0; index < elems.length / 2; index++) {
                elems[index].classList.remove(strClass)
            }
        } else {
            for (let index = 3; index < elems.length; index++) {
                elems[index].classList.remove(strClass)
            }
        }
    }

    let nextSlide = (elems, index, strClass) => {
        if (index === 1) {
            for (let index = 3; index < elems.length; index++) {
                elems[index].classList.add(strClass)
            }
        } else {
            for (let index = 0; index < elems.length / 2; index++) {
                elems[index].classList.add(strClass)
            }
        }
    }

    if (!(classSliderBlock[0] === "." && classSliderBlock !== "") || !(classSlides[0] === "." && classSlides !== "")) {
        return
    }

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault()

        prevSlide(slides, currentSlide, slideAct)

        if (e.target.matches(".arrow-right")) {
            currentSlide = 1
        } else if (e.target.matches(".arrow-left")) {
            currentSlide = 0
        } else { currentSlide = 0 }

        nextSlide(slides, currentSlide, slideAct)
    })
}

export default sliderCarusel