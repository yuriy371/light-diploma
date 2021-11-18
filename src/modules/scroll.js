const scroll = (e, targ) => {
    let nameTag = targ
    let elemUp = document.getElementById("top")

    // console.log(document.documentElement.scrollHeight - document.documentElement.clientHeight);

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
    
    if (targ.matches("img")) {
        e.preventDefault()
        elemUp.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

export default scroll