const globalTitle = "Le sabot de vénus"

const defaultBackground = "https://raw.githubusercontent.com/GiteSabotDeVenus/gitesabotdevenus.github.io/main/assets/img/background.jpg"

const menu = [
    {
        "title": "ACCUEIL",
        "location": "/"
    },
    {
        "title": "LOCALISATION",
        "location": "/location"
    },
    {
        "title": "DESCRIPTION",
        "location": "/description"
    },
    {
        "title": "RÉSERVATION",
        "location": "/reservation"
    },
    {
        "title": "RESSOURCES",
        "location": "/resources"
    },
    {
        "title": "AVIS",
        "location": "/advices"
    },
    {
        "title": "CONTACT",
        "location": "/contact"
    }
]

const footer = [
    {
        "title": "Navigation",
        "content": `Vous consultez la page "{TITLE}"<br>
                    <a href="/">> Retour à l'accueil</a>`
    },
    {
        "title": "Partager",
        "content": `> <a href="http://www.facebook.com/sharer.php?u=https://www.gitesabotdevenus.fr/&t=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus">Facebook</a><br>
                    > <a href="https://twitter.com/intent/tweet?url=https://www.gitesabotdevenus.fr/&text=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus">Twitter</a><br>
                    > <a href="mailto:?subject=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus&body=https://www.gitesabotdevenus.fr/">Mail</a>`
    },
    {
        "title": "Liens utiles",
        "content": `- <a href="/legal-notice">Mentions légales</a><br>
                    - <a href="/sitemap">Plan du site</a>`
    },
    {
        "title": "Informations",
        "content": `Juliette et Jean-Jacques CHAUVET<br>
                    contact@gitesabotdevenus.fr`
    }
]

class Page {
    title = "..."
    body = "..."
    background = ""

    constructor(title, body, background) {
        this.title = title
        this.body = body
        this.background = background
    }

    build() {
        document.body.innerHTML = ""

        document.title = this.title + " - " + globalTitle

        const headerElement = document.createElement("header")
        headerElement.classList.add("header")

        const menuElement = document.createElement("ul")
        menuElement.classList.add("menu")

        for (const menuPart of menu) {
            const menuPartElement = document.createElement("li")

            const menuPartAnchorElement = document.createElement("a")
            menuPartAnchorElement.setAttribute("href", menuPart.location)
            menuPartAnchorElement.classList.add("menu-element")
            menuPartAnchorElement.appendChild(document.createTextNode(menuPart.title))

            menuPartElement.appendChild(menuPartAnchorElement)

            menuElement.appendChild(menuPartElement)
        }

        const menuActivatorElement = document.createElement("span")
        menuActivatorElement.classList.add("menu-element")
        menuActivatorElement.classList.add("menu-activator")
        menuActivatorElement.appendChild(document.createTextNode("MENU"))

        menuActivatorElement.addEventListener('click', () => {
            menuElement.classList.toggle('active')
        })

        headerElement.appendChild(menuElement)
        headerElement.appendChild(menuActivatorElement)

        const pageElement = document.createElement("div")
        pageElement.classList.add("page")

        const pageTitleElement = document.createElement("h2")
        pageTitleElement.appendChild(document.createTextNode(this.title))

        const pageContentElement = document.createElement("div")
        pageContentElement.classList.add("page-content")
        pageContentElement.innerHTML = this.body

        pageElement.appendChild(pageTitleElement)
        pageElement.appendChild(pageContentElement)

        const footerElement = document.createElement("footer")
        footerElement.classList.add("footer")

        for (const footerPart of footer) {
            const footerPartElement = document.createElement("div")
            footerPartElement.classList.add("footer-element")

            const footerPartTitleElement = document.createElement("h3")
            footerPartTitleElement.appendChild(document.createTextNode(footerPart.title))

            const footerPartContentElement = document.createElement("div")
            footerPartContentElement.innerHTML = footerPart.content.replace("{TITLE}", this.title)

            footerPartElement.appendChild(footerPartTitleElement)
            footerPartElement.appendChild(footerPartContentElement)

            footerElement.appendChild(footerPartElement)
        }

        document.body.appendChild(headerElement)
        document.body.appendChild(pageElement)
        document.body.appendChild(footerElement)

        document.body.style.backgroundImage = `url("${this.background}")`
    }

}
