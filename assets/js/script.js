/* Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto! */

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// effettuo una chiamata AJAX

fetch(endpoint)

    .then(res => res.json())
    .then(data => {
        console.log(data)

        data.forEach((card) => {

            const { date, title, url } = card

            const rowEl = document.querySelector('.row')
            const cardMarkup = `<div class="col-4 col-md-6 col-sm-12">
                    <div class="card">
                        <img src="${url}" alt="yoga" class="card-img">
                        <div class="card-body">
                        <p> ${title}</p>
                        <p> ${date}</p>
                        </div>
                        <div class="pin"><img src="./assets/img/pin.svg" alt="pin"></div>
                    </div>
                </div>`

            rowEl.insertAdjacentHTML('afterbegin', cardMarkup)
        })
    })


