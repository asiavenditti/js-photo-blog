/* Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto! */

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// effettuo una chiamata AJAX
const rowEl = document.querySelector('.row')

fetch(endpoint)

    .then(res => res.json())
    .then(data => {
        console.log(data)

        data.forEach((card) => {

            const { date, title, url } = card


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
            rowEl.insertAdjacentHTML('beforeend', cardMarkup)
        })

        // recupero gli elementi dall'html per l'overlay

        const overlayEl = document.getElementById('overlay')
        const buttonEl = document.getElementById('close-btn')
        const imagesEl = document.querySelectorAll('.card-img')
        const modalImg = document.getElementById('modal-img')
        const arrowLeft = document.getElementById('arrow-left')
        const arrowRight = document.getElementById('arrow-right')

        // faccio un forEach per selezionare tutte le immagini, e poi scateno l'evento click per l'overlay

        imagesEl.forEach((image, index) => {

            image.addEventListener('click', function () {


                modalImg.src = image.src

                currentIndex = index


                overlayEl.classList.remove('d-none')


            })

        })

        arrowRight.addEventListener('click', function () {

            currentIndex++

            if (currentIndex == imagesEl.length) {
                currentIndex
            }

            modalImg.src = imagesEl[currentIndex].src
        })

        arrowLeft.addEventListener('click', function () {

            currentIndex--

            if (currentIndex == 0) {
                currentIndex
            }

            modalImg.src = imagesEl[currentIndex].src
        })


        buttonEl.addEventListener('click', function () {
            overlayEl.classList.add('d-none');
        })


        document.addEventListener('keydown', function (e) {

            if (e.key === 'Escape') {
                overlayEl.classList.add('d-none');

            }
        })

    })
