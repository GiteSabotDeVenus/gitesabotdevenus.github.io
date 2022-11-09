const getNews = async () => {
    const response = await fetch("https://raw.githubusercontent.com/GiteSabotDeVenus/data/main/news", {headers: new Headers()})
    return await response.json()
}

class News {
    news = []
    article_keys = []

    constructor(news) {
        for (const [id, article] of Object.entries(news)) {
            this.article_keys.push(id)
            this.news.push(new Article(id, article))
        }
    }

    keys() {
        return this.article_keys
    }

    get(id) {
        for (const article of this.news) {
            if (article.id === id) {
                return article
            }
        }
    }

    createIndexElements(node) {
        for (const article of this.news) {
            article.createIndexElement(node)
        }
    }

}

class Article {
    id = ""
    title = ""
    description = ""
    content = ""

    constructor(id, article) {
        this.id = id
        this.title = article["title"]
        this.description = article["description"]
        this.content = article["content"]
    }

    createIndexElement(node) {
        const titleElement = document.createElement("h4")
        titleElement.appendChild(document.createTextNode(this.title))
        titleElement.classList.add("top-separator")

        const descriptionElement = document.createElement("p")
        descriptionElement.innerHTML = this.description

        const viewArticleElement = document.createElement("a")
        viewArticleElement.setAttribute("href", "/news#" + this.id)
        viewArticleElement.appendChild(document.createTextNode("Voir l'article"))

        node.appendChild(titleElement)
        node.appendChild(descriptionElement)
        node.appendChild(viewArticleElement)
    }

    createElement(node) {
        node.innerHTML = this.content

        const returnElement = document.createElement("p")

        const brElement = document.createElement("br")

        const returnLinkElement = document.createElement("a")
        returnLinkElement.setAttribute("href", "/news")
        returnLinkElement.appendChild(document.createTextNode("Retourner aux actualités"))

        returnElement.appendChild(brElement)
        returnElement.appendChild(returnLinkElement)

        node.appendChild(returnElement)
    }

}