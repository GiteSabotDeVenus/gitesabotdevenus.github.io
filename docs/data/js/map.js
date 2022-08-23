window.addEventListener('load', () => {
    const mapActivator = document.querySelector(".map-activator")
    const mapContainer = document.querySelector(".map-container")

    mapActivator.addEventListener('click', () => {
        mapContainer.innerHTML = `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.0114181589474!2d6.085857515703413!3d45.63050693035167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bbb77b44d9971%3A0x23efe12d28aad4ba!2sG%C3%8ETE%20Le%20sabot%20de%20v%C3%A9nus!5e0!3m2!1sfr!2sfr!4v1660587317286!5m2!1sfr!2sfr"></iframe>`
        mapContainer.classList.toggle("active")
    })
})