// Global Variables
const stadiumCollection = document.querySelector("#stadium-collection")
const formModal = document.querySelector(".modal-content")
const buttonGroup = document.querySelector(".btn-group")
let userLogin 
let getOurRating
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";


// Render one Stadium
function renderOneStadium (stadiumObj) {
   
    const stadiumDiv = document.createElement('div')
    stadiumDiv.classList.add('card')
    stadiumDiv.dataset.id = stadiumObj.id

    // console.log(stadiumObj)
    stadiumDiv.innerHTML = 
       ` <img src="${stadiumObj.image}" 
            alt="${stadiumObj.name}" />
        <h2>${stadiumObj.name}</h2>`
       
    stadiumCollection.append(stadiumDiv)
}

// Render All Stadiums
function renderAllStadiums () {

    fetch ("http://localhost:3000/stadia")
        .then (response => response.json())
        .then (stadiaArr => {
            stadiaArr.forEach (stadiaObject => {
                renderOneStadium(stadiaObject)
            }) 
        })

        
}
renderAllStadiums()


// Eventlistener for stadiums
stadiumCollection.addEventListener("click", (event) => {

    if (event.target.className === "card")  {
   getOneStadium(event.target.dataset.id)
 }
})

    function getOneReview (id) {
        fetch (`http://localhost:3000/reviews`)
            .then (response => response.json())
            .then (data => stadiumInfo(data))
    }

function getOneStadium (id) {

    fetch (`http://localhost:3000/stadia/${id}`)
         .then (response => response.json())
         .then (data => stadiumInfo(data)) 
     }

 function stadiumInfo (stadiumInfoObj) {
   
    console.log(stadiumInfoObj)
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = stadiumInfoObj.image 
    detailImg.alt = stadiumInfoObj.name 

    const stadiumName = document.querySelector('h2.name')
    stadiumName.textContent = stadiumInfoObj.name
    
    const detailH3 = document.querySelector('h3.description')
    detailH3.textContent = stadiumInfoObj.description

    const detailH5 = document.querySelector('h5.comment')
    detailH5.textContent = stadiumInfoObj.reviews[0].comments
    
    getOurRating = document.querySelector('h4.rating')
    getOurRating.textContent = stadiumInfoObj.reviews[0].rating

    stadiumCollection.dataset.id = stadiumInfoObj.id
}

// rendering a user
function renderOneUser (userObj) {
    // console.log(userLogin)
    const userDiv = document.createElement('div')
    userDiv.classList.add('card')
    userDiv.dataset.id = userObj.id

    userDiv.innerHTML = 
       `<span> User </span>
    <h2>${userObj.username}</h2>`
    
}


(function() {
    (function($) {
      return $.fn.imgPreload = function(options) {
        var delay_completion, i, image_stack, placeholder_stack, replace, settings, spinner_stack, src, x, _i, _len;
        settings = {
          fake_delay: 10,
          animation_duration: 1000,
          spinner_src: 'spinner.gif'
        };
        if (options) {
          $.extend(settings, options);
        }
        image_stack = [];
        placeholder_stack = [];
        spinner_stack = [];
        window.delay_completed = false;
        delay_completion = function() {
          var x, _i, _len, _results;
          window.delay_completed = true;
          _results = [];
          for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
            x = image_stack[_i];
            _results.push($(x).attr('data-load-after-delay') === 'true' ? (replace(x), $(x).removeAttr('data-load-after-delay')) : void 0);
          }
          return _results;
        };
        setTimeout(delay_completion, settings.fake_delay);
        this.each(function() {
          var $image, $placeholder, $spinner_img, offset_left, offset_top;
          $image = $(this);
          offset_top = $image.offset().top;
          offset_left = $image.offset().left;
          $spinner_img = $('<img>');
          $placeholder = $('<img>').attr({
            src: 'http://personalauspolen.eu/wp-content/uploads/2012/12/widescreen-grass-dew-best-wallpaper-of-hd.jpg'
          });
          $placeholder.attr({
            width: $image.attr('1400')
          });
          $placeholder.attr({
            height: $image.attr('800')
          });
          spinner_stack.push($spinner_img);
          placeholder_stack.push($placeholder);
          image_stack.push($image.replaceWith($placeholder));
          $('body').append($spinner_img);
          $spinner_img.css({
            position: 'absolute'
          });
          $spinner_img.css('z-index', 9999);
          $spinner_img.load(function() {
            $(this).css({
              left: (offset_left + $placeholder.width() / 2) - $(this).width() / 2
            });
            return $(this).css({
              top: (offset_top + $placeholder.height() / 2) - $(this).height() / 2
            });
          });
          return $spinner_img.attr({
            src: settings.spinner_src
          });
        });
        i = 0;
        for (_i = 0, _len = image_stack.length; _i < _len; _i++) {
          x = image_stack[_i];
          x.attr({
            no: i++
          });
          src = x.attr('src');
          x.attr({
            src: ''
          });
          x.load(function() {
            if (window.delay_completed) {
              return replace(this);
            } else {
              return $(this).attr('data-load-after-delay', true);
            }
          });
          x.attr({
            src: src
          });
        }
        replace = function(image) {
          var $image, no_;
          $image = $(image);
          no_ = $image.attr('no');
          placeholder_stack[no_].replaceWith($image);
          spinner_stack[no_].fadeOut(settings.animation_duration / 2, function() {
            return $(this).remove();
          });
          return $image.fadeOut(0).fadeIn(settings.animation_duration);
        };
        return this;
      };
    });
  }).call(this);
  

  // Some random colors
const colors = ["#FFFFFF", "#321d34", "#FFD700"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


// dots

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Login form
formModal.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(event.target)
    if (event.target.matches('form.user-login')){
        const userName = formModal.querySelector('input#login-form').value 
        stadiumCollection.dataset.userName = userName

        // console.log("Hello")
        fetch (`http://localhost:3000/users`)
            .then (response => response.json())
            .then ( userArr => { 
                // console.log(userLogin)
                // userArr.forLoop(userObj => {
                    for(let i = 0; i < userArr.length; i++){
                        if (userArr[i].username === userName){
                            userLogin = userArr[i]
                            // grabs HMSTRS and changes it to username
                            const userNameTag = document.querySelector('.username')
                            userNameTag.textContent = userLogin.username
                             
                            // removes pop up
                            document.querySelector(".modal.is-visible").classList.remove(isVisible);
                            renderOneUser(userLogin)
                            break 
                        }
                    }
            
                    if (!userLogin) {
                        newUserLogin(userName)
                    }
        // }) 
            buttonGroup.style.display = "none"
        })
    }
})

// New User Login

function newUserLogin (newUser) {
    console.log(userLogin)
    fetch (`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({username: newUser})
    })
       
}


// New ratings & comments

function newReview () {
    fetch ('http://localhost:3000/reviews', {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify()
    })
}
