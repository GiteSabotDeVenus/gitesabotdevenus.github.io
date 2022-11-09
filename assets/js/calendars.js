const monthsNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const getReservations = async () => {
    const reservations = {}
    const response = await fetch("https://raw.githubusercontent.com/GiteSabotDeVenus/data/main/reservations", {headers: new Headers()})
    const data = await response.text()
    for (const line of data.split("\n")) {
        if (line === "") continue
        const lineData = line.split(':')
        const days = []
        for (const day of lineData[1].split(';')) {
            days.push(parseInt(day))
        }
        reservations[lineData[0]] = days
    }
    return reservations
}

const getDays = (year, month, reserved = []) => {
    const days = []
    const daysMax = new Date(year, month + 1, 0).getDate()
    const timestamp = new Date()
    for (let dayNumber = 1; dayNumber <= daysMax; dayNumber++) {
        const isReserved = reserved.indexOf(dayNumber) !== -1
        const day = new Date(year, month, dayNumber)
        days.push({
            number: dayNumber,
            weekDay: day.getDay() === 0 ? 7 : day.getDay(),
            reserved: isReserved,
            passed: timestamp - day > 0
        })
    }
    return days
}

const getCalendars = async () => {
    const calendars = []

    const reservations = await getReservations()

    const date = new Date()

    const actualMonth = date.getMonth()
    const actualYear = date.getFullYear()

    for (let month = actualMonth; month < actualMonth + 12; month++) {
        let monthNumber
        let yearNumber = actualYear
        if (month < 12) {
            monthNumber = month
        } else {
            monthNumber = month - 12
            yearNumber++
        }
        calendars.push({
            month: monthsNames[monthNumber],
            year: yearNumber,
            days: getDays(yearNumber, monthNumber, reservations[`${monthNumber}-${yearNumber}`])
        })
    }
    return calendars
}

window.addEventListener('load', async () => {
    try {
        const calendars = await getCalendars()

        const calendarsElement = document.querySelector(".calendars")

        calendarsElement.innerHTML = ""

        for (const calendar of calendars) {
            const calendarElement = document.createElement('div')
            calendarElement.classList.add('calendar')

            const calendarTitleElement = document.createElement('h4')
            calendarTitleElement.appendChild(document.createTextNode(calendar['month'] + " " + calendar['year']))

            calendarElement.appendChild(calendarTitleElement)

            const calendarTableElement = document.createElement('table')
            const calendarTableHeaderElement = document.createElement('tr')
            for (const day of ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]) {
                const calendarDayNameElement = document.createElement('td')
                calendarDayNameElement.appendChild(document.createTextNode(day))
                calendarTableHeaderElement.appendChild(calendarDayNameElement)
            }

            calendarTableElement.appendChild(calendarTableHeaderElement)

            let deleteCount = 8 - calendar['days'][0]['weekDay']

            const firstLine = calendar['days'].splice(0, deleteCount)
            const firstLineElement = document.createElement('tr')

            for (let i = 0; i < 7 - firstLine.length; i++) {
                firstLineElement.appendChild(document.createElement('td'))
            }

            for (const day of firstLine) {
                const dayElement = document.createElement('td')
                dayElement.classList.add("day")
                dayElement.appendChild(document.createTextNode(day['number'].toString()))
                if (day['passed']) {
                    dayElement.classList.add('passed')
                } else if (day['reserved']) {
                    dayElement.classList.add('reserved')
                }
                firstLineElement.appendChild(dayElement)
            }

            calendarTableElement.appendChild(firstLineElement)

            /* SORRY FOR THE BIG COPY-PASTE BUT I'LL MAKE IT BETTER ANOTHER TIME. THE PRIORITY IS : IT WORKS. */

            do {
                const line = calendar['days'].splice(0, 7)
                const lineElement = document.createElement('tr')

                for (const day of line) {
                    const dayElement = document.createElement('td')
                    dayElement.classList.add("day")

                    dayElement.appendChild(document.createTextNode(day['number'].toString()))

                    if (day['passed']) {
                        dayElement.classList.add('passed')
                    } else if (day['reserved']) {
                        dayElement.classList.add('reserved')
                    }

                    lineElement.appendChild(dayElement)
                }

                calendarTableElement.appendChild(lineElement)
            } while (calendar['days'].length > 7)

            const lineElement = document.createElement('tr')

            for (const day of calendar['days']) {
                const dayElement = document.createElement('td')
                dayElement.classList.add("day")

                dayElement.appendChild(document.createTextNode(day['number'].toString()))

                if (day['passed']) {
                    dayElement.classList.add('passed')
                } else if (day['reserved']) {
                    dayElement.classList.add('reserved')
                }

                lineElement.appendChild(dayElement)
            }

            for (let i = 0; i < 7 - calendar['days'].length; i++) {
                lineElement.appendChild(document.createElement('td'))
            }

            calendarTableElement.appendChild(lineElement)

            calendarElement.appendChild(calendarTableElement)

            calendarsElement.appendChild(calendarElement)

        }
    } catch (exception) {
        console.error(exception)
        const calendarsElement = document.querySelector(".calendars")
        calendarsElement.innerHTML = '<p>Chargement impossible des disponibilités, veuillez réessayer ultérieurement. Si le problème persiste, veuillez <a href="/contact">nous contacter</a>.</p>'

    }


})