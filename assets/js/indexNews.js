window.addEventListener("load", async () => {
    const news = new News(await getNews())
    news.createIndexElements(document.querySelector(".news"))
})