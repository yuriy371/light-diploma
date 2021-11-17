const scroll = () => {
    let menu = document.querySelector(".top-menu");

    let smoothScroll = (itemScrol) => {
        let blockID = itemScrol.getAttribute('href').slice(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    menu.addEventListener("click", (e) => {
        let nameTag = e.target

        if (e.target.matches("ul>li>a")) {
            e.preventDefault()
            smoothScroll(nameTag)
        }
    })
}

export default scroll