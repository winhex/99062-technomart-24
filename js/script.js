
var link = document.querySelector(".b-contacts__btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".b-modal__close-btn");
var login = popup.querySelector(".b-modal__contacts-input");
var mapLink = document.querySelector(".b-contacts__map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".b-modal__map-close");
var form = popup.querySelector(".b-modal__mail-form");

var login = popup.querySelector("[name=user-name]");
  var mail = popup.querySelector("[name=e-mail]");
  var text = popup.querySelector("[name=text-form]");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    


});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});


form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value || !text.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
        
      }
  });
