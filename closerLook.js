function makeImageDoCoolStuff(imgElement) {
    imgElement.onmousedown = () => {
        document.body.classList.add('closerlook-modal-open')
        let modal = document.createElement('dialog')
        modal.classList.add('closerlook-dialog')
        let modalImage = document.createElement('img')
        modalImage.classList.add('closerlook-img')
        modalImage.src = imgElement.src
        modalImage.alt = imgElement.alt
        modal.append(modalImage)
        document.body.append(modal)

        modal.showModal()
        modal.onmousedown = () => {
            modal.remove()
            document.body.classList.remove('closerlook-modal-open')
        }
    }
}

function makeAllImagesCool() {
    [...document.querySelectorAll('img')].forEach(e => makeImageDoCoolStuff(e))
}