var prevScrollpos = window.scrollY;
  
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  var topBar = document.getElementById("top-bar");

  // Vérifie la largeur de la fenêtre
  var screenWidth = window.innerWidth;

  // Si la largeur de l'écran est inférieure à 700px, utilise -70px, sinon -58px
  var hidePosition = (screenWidth <= 700) ? "-110px" : "-58px";

  if (prevScrollpos > currentScrollPos) {
    topBar.style.top = "0";
  } else {
    topBar.style.top = hidePosition;
  }

  prevScrollpos = currentScrollPos;
}