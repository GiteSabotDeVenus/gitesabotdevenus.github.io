window.addEventListener("load", () => {
    new Page(document.title, document.body.innerHTML, defaultBackground).build()
})