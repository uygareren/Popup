const submitBtn = document.getElementsByClassName("submit-btn")[0];
const popUp = document.getElementsByClassName("pop-up")[0];
const okBtn = document.getElementsByClassName("ok-btn")[0];

submitBtn.addEventListener("click", function() {
  popUp.classList.add("pop-up-visible");
});

okBtn.addEventListener("click", function(){
    popUp.classList.add("pop-up-visible");
})