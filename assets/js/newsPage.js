let news;
let title;
let body;

const updatePage = () => {
    let hash = window.location.hash?.substring(1)

    if (!news.keys().includes(hash)) {
        new Page(title, body, defaultBackground).build()
        news.createIndexElements(document.querySelector(".news"))
        return
    }

    const article = news.get(hash)

    new Page(article.title, "", defaultBackground).build()

    article.createElement(document.querySelector(".page-content"))
}

window.addEventListener("load", async () => {
    news = new News(await getNews());
    title = document.title
    body = document.body.innerHTML
    updatePage()
})

window.addEventListener("hashchange", updatePage)
