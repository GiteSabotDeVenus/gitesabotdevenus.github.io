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
            > Facebook<br>
            > Instagram<br>
            > Twitter<br>
            > Mail
        </div>
        <div class="footer-element">
            <h3>Liens utiles</h3>
            - <a href="/legal-notice">Mentions légales</a><br>
            - <a href="/sitemap">Plan du site</a>
        </div>
        <div class="footer-element">
            <h3>Informations</h3>
            Juliette et Jean-Jacques CHAUVET<br>
            177 route du Mollard, la Crochère 73340 Aillon-le-Vieux<br>
            gite.lesabotdevenus@gmail.com
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
    document.body.style.backgroundImage = `url("/docs/data/img/background.jpg")`
})