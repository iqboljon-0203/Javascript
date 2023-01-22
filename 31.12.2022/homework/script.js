let text = document.querySelector(".text");

window.onfocus = function () {
  text.innerHTML =
    "Xullas shu textni copy qilasimi,screen qilasimi bilmadimu uddalolmaysiz!";
};
window.onblur = function () {
  text.innerHTML = "";
};

window.onkeyup = function (e) {
  if (e.keyCode == 44) {
    alert("Dont try to take a screen shot");
    text.innerHTML = "";
  }
};