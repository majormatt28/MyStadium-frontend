
const stadiumCollection = document.querySelector("#stadium-collection")

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


stadiumCollection.addEventListener("click", (event) => {
   if (event.target.matches('card')) {
   getOneStadium(event.target.dataset.id)
 }
 console.log(event.target)
})


     function getOneStadium (id) {

    fetch (`http://localhost:3000/stadia/${id}`)
         .then (response => response.json())
         .then (data => stadiumInfo(data)) 
     }

 function stadiumInfo (stadiumInfoObj) {
   
    const detailImg = document.querySelector('img.detail-image')
    detailImg.src = stadiumInfoObj.image 
    detailImg.alt = stadiumInfoObj.name 

    const stadiumName = document.querySelector('h2.name')
    stadium.textContent = stadiumInfoObj.name
    
    const detailH3 = document.querySelector('h3.description')
    detailH3.textContent = stadiumInfoObj.description

    stadiumCollection.dataset.id = stadiumInfoObj.id
 }







// function renderOneUser (userObj) {
   
//     const userDiv = document.createElement('div')
//     userDiv.classList.add('card')
//     userDiv.dataset.id = userObj.id

    
//     userDiv.innerHTML = 
//        `<span> User </span>
//     <h2>${userObj.username}</h2>`
    
//     stadiumCollection.append(userDiv)

// }




// function renderAllUsers () {

//     fetch ("http://localhost:3000/users")
//         .then (response => response.json())
//         .then (userArr => {
//             userArr.forEach (userObject => {
//                 renderOneUser(userObject)
//             }) 
//         })

        
// }





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
  