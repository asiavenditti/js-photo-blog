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

            // preparo il markup della card 

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

            // inserisco il markup dinamico in html 
            rowEl.insertAdjacentHTML('afterbegin', cardMarkup)

            // recupero gli elementi dall'html per l'overlay

            const overlayEl = document.getElementById('overlay')
            const buttonEl = document.getElementById('close-btn')
            const imagesEl = document.querySelectorAll('.card-img')
            const modalImg = document.getElementById('modal-img')

            // faccio un forEach per selezionare tutte le immagini, e poi scateno l'evento click per l'overlay

            imagesEl.forEach((image) => {

                image.addEventListener('click', function () {

                    modalImg.src = image.src

                    overlayEl.classList.remove('d-none')

                })

            })


            buttonEl.addEventListener('click', function () {
                overlayEl.classList.add('d-none');
            })

        })

    })

