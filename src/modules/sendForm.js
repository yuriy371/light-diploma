import { animate, avtoCloseModal } from "./helpers"
const sendForm = ({ formId }) => {
    let form = document.getElementById(formId)
    let winWidth = document.documentElement.clientWidth

    let statusBlock = document.createElement("div")
    let loadText = "Идет отправка..."
    let attentionText = "Заполните все поля"
    let errorText = "Ошибка"
    let successText = "Спасибо! Наш менеджер с вами свяжется."

    let check = (item) => {
        item.value = item.value.replace(/\s+/, " ")
        item.value = item.value.replace(/-+/, "-").replace(/\++/, "+")
        item.value = item.value.replace(/(^[\s\-]+)/g, "").replace(/[\s\-]+$/g, "")
    }

    let validSuccess = (item) => {
        let validTextName = /[^А-Я\s-]/gi
        let validPhone = /[^\d\+]/g

        let name = item.querySelector("[name='fio']")
        let phone = item.querySelector("[name='tel']")

        if (!validTextName.test(name.value) && name.value !== "") {
            check(name)
            name.classList.add("success")
            name.value = name.value.replace(validTextName, "")
        } else {
            name.classList.remove("success")
            name.value = name.value.replace(validTextName, "")
        }

        if (!validPhone.test(phone.value) && phone.value !== "") {
            check(phone)
            phone.classList.add("success")
            phone.value = phone.value.replace(validPhone, "")
        } else {
            phone.classList.remove("success")
            phone.value = phone.value.replace(validPhone, "")
        }
    }

    let validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.classList.contains("success") && input.value === "") {
                success = false
            }
        })

        return success
    }

    let sendData = async (data) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        return await res.json()
    }

    let submitForm = (item) => {
        let formElements = item.querySelectorAll("input")
        let formData = new FormData(item)
        let formBody = {}

        statusBlock.textContent = loadText
        item.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements, item)) {
            sendData(formBody).then(data => {
                let clearStatBlock = setInterval(() => {
                    if (statusBlock) {
                        avtoCloseModal({
                            elemModal(modalCall, modalOver) {
                                if (winWidth < 768) {
                                    clearInterval(animate)
                                    modalCall.style.opacity = ""
                                    modalOver.style.display = "none"
                                } else {
                                    if (modalCall.style.opacity == 1) {
                                        animate({
                                            duration: 500,
                                            timing(timeFraction) {
                                                return timeFraction;
                                            },
                                            draw(progress) {
                                                modalCall.style.opacity = 1 - progress

                                                if (modalCall.style.opacity == 0) {
                                                    modalCall.style.display = "none"
                                                    modalOver.style.display = "none"
                                                }
                                            }
                                        });
                                    }
                                }

                            }
                        })
                        statusBlock.remove()
                        clearInterval(clearStatBlock)
                    }
                }, 3000)

                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = ""
                    input.classList.remove("success")
                })
            })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            let clearStatBlock = setInterval(() => {
                if (statusBlock) {
                    statusBlock.remove()
                    clearInterval(clearStatBlock)
                }
            }, 3000)
            statusBlock.textContent = attentionText
            console.log("error");
        }
    }

    try {
        if (!form) {
            throw new Error("Верните форму на место!")
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            submitForm(form)
        })

        form.addEventListener("input", () => { validSuccess(form) })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm