
const stadiumCollection = document.querySelector("#stadium-collection")

function renderOneCard (stadiumObj) {
   
    const stadiumDiv = document.createElement('div')
    stadiumDiv.classList.add('card')
    stadiumDiv.dataset.id = stadiumObj.id

    console.log(stadiumObj)
    stadiumDiv.innerHTML = 
       ` <img src="${stadiumObj.image}" 
            alt="${stadiumObj.name}" />
      
            <h2>${stadiumObj.name}</h2>
           

        
   `
    
     stadiumCollection.append(stadiumDiv)

}




function renderAllCard () {

    fetch ("http://localhost:3000/stadia")
        .then (response => response.json())
        .then (stadiaArr => {
            stadiaArr.forEach (stadiaObject => {
                renderOneCard(stadiaObject)
            }) 
        })

        
}
renderAllCard()

stadiumCollection.addEventListener("click", (event) => {
   
    fetch (`http://localhost:3000/stadia/${event.target.dataset.id}`)
    .then (response => response.json())
    .then (renderOneCard) 
    // <h4>${stadiumObj.description}</h4>

})

function stadiumInfo (stadiumInfoObj) {
    

}


function renderOneUser (userObj) {
   
    const userDiv = document.createElement('div')
    userDiv.classList.add('card')
    userDiv.dataset.id = userObj.id

    
    userDiv.innerHTML = 
       ` 
            
            <span> User </span>
            
      
            <h2>${userObj.username}</h2>
          
        
   `
    
     stadiumCollection.append(userDiv)

}




function renderAllUsers () {

    fetch ("http://localhost:3000/users")
        .then (response => response.json())
        .then (userArr => {
            userArr.forEach (userObject => {
                renderOneUser(userObject)
            }) 
        })

        
}
renderAllUsers()