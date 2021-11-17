const slider = (classSliderBlock, classSlides, classDots, slideAct = "active", dotAct = "dot-active") => {
    let sliderBlock = document.querySelector(classSliderBlock)
    let slides = document.querySelectorAll(classSlides)
    let portfolioDots = document.querySelector(classDots)
    let sliderImg = document.querySelectorAll(".item")
    let dots = []

    let timeInterval = 3000

    let currentSlide = 0
    let interval

    let creatDot = () => {
        slides.forEach((item, index) => {
            let liDot = document.createElement("li")

            if (index === 0) {
                liDot.className = `dot ${dotAct}`
            } else {
                liDot.className = "dot"
            }

            portfolioDots.append(liDot)

            dots.push(liDot)
        })
    }

    let prevSlide = (elems, index, strClass) => {
        if (elems[index].classList[0] === "item") {
            elems[index].style.display = "none"
        } else {
            elems[index].classList.remove(strClass)
        }
    }

    let nextSlide = (elems, index, strClass) => {
        if (elems[index].classList[0] === "item") {
            elems[index].style.display = "block"
        } else {
            elems[index].classList.add(strClass)
        }
    }

    let autoSlide = () => {
        prevSlide(slides, currentSlide, slideAct)
        prevSlide(sliderImg, currentSlide)
        prevSlide(dots, currentSlide, dotAct)

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, slideAct)
        nextSlide(sliderImg, currentSlide)
        nextSlide(dots, currentSlide, dotAct)
    }

    let startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
        slides.forEach((item, index) => {
            if (index === 0) {
                item.classList.add(slideAct)
            }
        })
    }

    let stopSlide = () => {
        clearInterval(interval)
    }

    if (!(classSliderBlock[0] === "." && classSliderBlock !== "") || !(classSlides[0] === "." && classSlides !== "")) {
        return
    }

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault()

        if (!e.target.matches(".dot, .portfolio-btn")) {
            return
        }

        prevSlide(slides, currentSlide, slideAct)
        prevSlide(dots, currentSlide, dotAct)
        prevSlide(sliderImg, currentSlide)

        if (e.target.matches("#arrow-right")) {
            currentSlide++
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--
        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, slideAct)
        nextSlide(dots, currentSlide, dotAct)
        nextSlide(sliderImg, currentSlide)
    })

    sliderBlock.addEventListener("mouseenter", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener("mouseleave", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            startSlide(timeInterval)
        }
    }, true)


    creatDot()
    startSlide(timeInterval)
}

export default slider