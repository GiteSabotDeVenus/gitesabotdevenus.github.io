const body = `
    <header class="header">
        <ul class="menu">
            <li><a class="menu-element" href="/">ACCUEIL</a></li>
            <li><a class="menu-element" href="/location">LOCALISATION</a></li>
            <li><a class="menu-element" href="/description">DESCRIPTION</a></li>
            <li><a class="menu-element" href="/reservation">RÉSERVATION</a></li>
            <li><a class="menu-element" href="/resources">RESSOURCES</a></li>
            <li><a class="menu-element" href="/advices">AVIS</a></li>
            <li><a class="menu-element" href="/contact">CONTACT</a></li>
        </ul>
        <span class="menu-element menu-activator">MENU</span>
    </header>
    <div class="page">
        <h2>{TITLE}</h2>
        {BODY}
    </div>
    <footer class="footer">
        <div class="footer-element">
            <h3>Navigation</h3>
            Vous consultez la page "{TITLE}"<br>
            <a href="/">> Retour à l'accueil</a>
        </div>
        <div class="footer-element">
            <h3>Partager</h3>
            > <a href="http://www.facebook.com/sharer.php?u=https://www.gitesabotdevenus.fr/&t=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus">Facebook</a><br>
            > <a href="https://twitter.com/intent/tweet?url=https://www.gitesabotdevenus.fr/&text=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus">Twitter</a><br>
            > <a href="mailto:?subject=G%C3%AEte%20le%20Sabot%20de%20V%C3%A9nus&body=https://www.gitesabotdevenus.fr/">Mail</a>
        </div>
        <div class="footer-element">
            <h3>Liens utiles</h3>
            - <a href="/legal-notice">Mentions légales</a><br>
            - <a href="/sitemap">Plan du site</a>
        </div>
        <div class="footer-element">
            <h3>Informations</h3>
            Juliette et Jean-Jacques CHAUVET<br>
            contact@gitesabotdevenus.fr
        </div>
    </footer>
`

const title = "Le sabot de vénus"

window.addEventListener('load', () => {
    document.body.innerHTML = body.replace("{BODY}", document.body.innerHTML).replaceAll("{TITLE}", document.title)

    document.title = document.title + " - " + title

    const menuActivator = document.querySelector(".menu-activator")
    const menuBar = document.querySelector(".menu")

    menuActivator.addEventListener('click', () => {
        menuBar.classList.toggle('active')
    })
})

window.addEventListener('load', () => {
    document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/GiteSabotDeVenus/gitesabotdevenus.github.io/main/assets/img/background.jpg")`
})