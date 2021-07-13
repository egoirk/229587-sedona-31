const popupButton = document.querySelector(".popup-button");
const popupForm = document.querySelector(".popup-form");
const popupFormClose = document.querySelector(".popup-show");
const searchForm = document.querySelector(".search-form");
const appointment = document.querySelector(".appointment");
const checkout = document.querySelector(".checkout");



popupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupForm.classList.toggle("popup-show");
});

searchForm.addEventListener("submit", function (evt) {
    if (!appointment.value || !checkout.value   || !child.value) {
        popupForm.classList.add("popup-error");
        evt.preventDefault();
    };
  });

 