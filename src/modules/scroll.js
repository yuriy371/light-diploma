const scroll = (e, targ) => {
    let nameTag = targ

    let smoothScroll = (itemScrol) => {
        let blockID = itemScrol.getAttribute('href').slice(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    if (targ.matches("ul>li>a")) {
        e.preventDefault()
        smoothScroll(nameTag)
    }
}

export default scroll