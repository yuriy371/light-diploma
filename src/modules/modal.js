import { animate } from "./helpers"
const modal = (e, targ) => {
    let modalCallback = document.querySelector(".modal-callback")
    let modalOverlay = document.querySelector(".modal-overlay")

    if (targ.matches(".callback-btn")) {
        e.preventDefault()
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
        animate({
            duration: 600,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                modalCallback.style.opacity = progress
            }
        });
    } else if (!targ.closest(".modal-callback") || targ.closest(".modal-close>img")) {
        if (modalCallback.style.opacity == 1) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modalCallback.style.opacity = 1 - progress

                    if (modalCallback.style.opacity == 0) {
                        modalCallback.style.display = "none"
                        modalOverlay.style.display = "none"
                    }
                }
            });
        }
    } else {
        return
    }

    if (targ.matches(".img-wrapper")) {
        e.preventDefault()
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
        animate({
            duration: 600,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                modalCallback.style.opacity = progress
            }
        });
    }else if (targ.matches(".button-services")) {
        e.preventDefault()
        modalCallback.style.display = "block"
        modalOverlay.style.display = "block"
        animate({
            duration: 600,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                modalCallback.style.opacity = progress
            }
        });
    } else {
        return
    }
}

export default modal