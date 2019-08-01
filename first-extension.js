function imageSubstituter() {
    let images = document.querySelectorAll('img[class*="EntityPhoto"]')

    for (let i = 0; images.length; i++) {
        images[i].src = browser.runtime.getURL("images/kitten.jpg")
    }
}

const observer = new MutationObserver(imageSubstituter)
const config = { childList: true, subtree: true}
observer.observe(document.body, config)