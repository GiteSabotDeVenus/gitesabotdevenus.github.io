const pictures = [
    ["living-room.jpg", "<h4>Salon</h4>Superficie de la pièce : 7,36 m2<br>Espace ouvert sur la cuisine.<br>Eclairage naturel à partir d'un vélux.<br>Des jeux et des livres de tout âge sont mis à disposition."],
    ["living-room-2.jpg", "<h4>Salon</h4>Sur demande, une chaise haute peut être mise à disposition."],
    ["kitchen.jpg", "<h4>Cuisine</h4>Superficie de la pièce : 10,24 m2<br>Espace ouvert sur le salon.<br>Eclairage naturel venant d'un vélux et d'une porte-fenêtre qui est l'entrée principale du gîte."],
    ["bedroom.jpg", "<h4>Chambre</h4>Superficie de la pièce : 10,36 m2<br>Eclairage naturel venant d'un vélux.<br>Une couette est prévue par lit ainsi qu'un oreiller.<br>Draps et serviettes de toilette sont fournies."],
    ["bedroom-2.jpg", "<h4>Chambre</h4>Un lit enfant peut être ajouté au besoin."],
    ["bedroom-3.jpg", "<h4>Chambre</h4>Sur demande, un lit bébé peut être mis à disposition."],
    ["bathroom.jpg", "<h4>Salle de bains</h4>Superficie de la pièce : 2,70 m2"],
    ["garden.jpg", "<h4>Jardin</h4>Un espace extérieur pour profiter des journées ensoleillées."],
    ["colombier.jpg", "<h4>Colombier</h4>Vue du Colombier enneigé.<br>Beau domaine de ski de randonnée.<br>Photo prise depuis le balcon du gîte."],
    ["bade.jpg", "<h4>La Bade</h4>Vue de la Bade.<br>Photo prise depuis le balcon du gîte."],
    ["margeriaz.jpg", "<h4>Margeriaz</h4>Vue de Aillons Margeriaz 1400.<br>Domaine skiable à environ 10 kms du gîte.<br>Ski de piste, ski de fond, raquettes, ballade en chiens de traineaux, repas à la Bergerie accessible en raquettes...<br>Photo prise depuis le balcon du gîte."],
    ["colombier-bade-cows.jpg", "<h4>Colombier, la bade et les vaches</h4>Première neige sur le Colombier et la Bade.<br>Le troupeau de vaches profite encore des belles journées d'automne.<br>Photo prise depuis le balcon du gîte."],
    ["calves.jpg", "<h4>Les veaux</h4>Des veaux viennent brouter à côté du gîte.<br>Quelle charmante compagnie et quel joyeux tintement de clochettes."],
    ["noisette.jpg", "<h4>Noisette</h4>Noisette, la mascotte du village."],
    ["roes.jpg", "<h4>Les chevreuils</h4>Durant l'hiver, les chevreuils viennent chercher de l'herbe à côté du gîte.<br>Quel merveilleux spectacle."],
    ["snow-sun.jpg", "<h4>Colombier, la neige et le soleil</h4>Quel beau paysage d'hiver : neige et soleil.<br>Avec le Colombier qui se détache dans le ciel bleu."],
    ["crochere.jpg", "<h4>La Crochère et Colombier</h4>Photo prise depuis la sortie du village de Aillon le Jeune. Nous apercevons aussi le hameau de La Crochère."],
    ["colombier-2.jpg", "<h4>Colombier depuis le col</h4>Vue du Colombier enneigé depuis le Col des Prés."],
    ["multiple-colombier.jpg", "<h4>Les saisons du Colombier</h4>Vues du Colombier prises depuis le gîte.<br>Vues prises à différents moments de la journée ainsi qu'à différentes saisons."]
]

window.addEventListener('load', () => {
    let actual = 0
    const pictureViewer = document.querySelector(".picture-viewer")
    const previous = document.querySelector(".previous")
    const next = document.querySelector(".next")

    const show = (number) => {
        pictureViewer.innerHTML = ""
        const image = document.createElement("img")
        image.setAttribute("src", "../assets/img/" + pictures[number][0])
        const text = document.createElement("p")
        text.innerHTML = pictures[number][1]
        text.classList.add("text")
        pictureViewer.appendChild(image)
        pictureViewer.appendChild(text)
    }

    show(actual)

    next.addEventListener('click', () => {
        if (actual + 1 < pictures.length) {
            actual += 1
        } else {
            actual = 0
        }
        show(actual)
    })

    previous.addEventListener('click', () => {
        if (actual > 0) {
            actual -= 1
        } else {
            actual = pictures.length - 1
        }
        show(actual)
    })

})
