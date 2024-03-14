//gives true if it's intersecting with the viweport
const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.
        filter(isIntersecting)
        .forEach(entry => {
            const containerNode = entry.target
            const img = containerNode.firstChild;
            const url = img.dataset.src;
            //load image
            img.src = url

            //unlisten the image
            observer.unobserve(containerNode)
        })
})

//exporting
export const registerImage = (image) => {
    observer.observe(image)
}
