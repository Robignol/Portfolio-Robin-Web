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



document.addEventListener("DOMContentLoaded", () => {
  const myVideo = document.getElementById("video");
  const lowPowerGif = document.getElementById("low-power-gif");

  if (!myVideo) {
    console.error("L'élément vidéo avec l'ID 'myVideo' n'a pas été trouvé.");
    return;
  }

  // Essayer de lire la vidéo
  myVideo.play()
    .then(() => {
      console.log("La vidéo est jouée normalement.");
      lowPowerGif.style.display = "none";  // Cache le GIF
    })
    .catch((error) => {
      console.error("Erreur de lecture de la vidéo:", error);
      lowPowerGif.style.display = "block";  // Affiche le GIF
      myVideo.style.display = "none";  // Cache la vidéo
    });
});
