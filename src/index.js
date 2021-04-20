const allCards = document.querySelectorAll('.card')

function renderOneCard(stadiumObj) {
    const outerDiv = document.createElement('div')
    outerDiv.classList.add('card')
    outerDiv.dataset.id = stadiumObj.id

    outerDiv.innerHTML = `<div class="img-container">
        <img src="${stadiumObj.image}"
            alt="${stadiumObj.name}" />
        <div class="stadium-description-container">
            <h4>${stadiumObj.description}</h4>
        </div>
    </div>
   
    `

    const collectionDiv = document.querySelector('div#collection')
    collectionDiv.append(outerDiv)
}


function renderAllCards() {
    fetch('http://localhost:3000/stadia')
        .then(response => response.json())
        .then(stadiaArr => {
            stadiaArr.forEach(stadiaObject => {
                renderOneCard(stadiaObject)
            })
        })
}
