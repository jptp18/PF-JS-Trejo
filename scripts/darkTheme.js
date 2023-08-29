/**Variables**/
const theme_btn = document.getElementById("theme_btn");
const body = document.getElementById("body");
const logo = document.getElementById("logo");
const camera = document.getElementById("camera");
const film_reel = document.getElementById("film_reel");
const theme_link = document.getElementById("theme_link");

const isDarkMode = localStorage.getItem("darkMode") === "true";


if(isDarkMode){
  body.classList.add("dark");
  create_img.src = "./assets/CTA-crear-gifo-modo-noc.svg";
  camera.src = "./assets/camara-modo-noc.svg";
  film_reel.src = "./assets/pelicula-modo-noc.svg";
  theme_link.textContent = "Modo claro";
}
else{
  body.classList.remove("dark");
  create_img.src = "./assets/button-crear-gifo.svg";
  camera.src = "./assets/camara.svg";
  film_reel.src = "./assets/pelicula.svg";
  theme_link.textContent = "Modo oscuro";
}

theme_btn.addEventListener("click", (e)=>{
  e.preventDefault();

  body.classList.toggle("dark");
  const newDarkModeState = body.classList.contains("dark");
  localStorage.setItem("darkMode", newDarkModeState);

  // Actualiza el texto del botón según el nuevo estado
  if (newDarkModeState) {
    theme_link.textContent = "Modo claro";
  } else {
    theme_link.textContent = "Modo oscuro";
  }

});