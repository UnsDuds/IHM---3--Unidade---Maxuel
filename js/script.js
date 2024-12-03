// Navegação entre páginas
const homeLink = document.getElementById('home');
if (homeLink) {
  homeLink.addEventListener('click', () => {
    window.location.href = 'index.html'; // Navega para a página inicial
  });
}

const productLink = document.getElementById('product');
if (productLink) {
  productLink.addEventListener('click', () => {
    window.location.href = 'consulta.html'; // Navega para a página de produtos
  });
}

// Redes sociais
const whatsappIcon = document.getElementById('whatsapp');
if (whatsappIcon) {
  whatsappIcon.addEventListener('click', () => {
    window.location.href = '#'; // Defina o link real se necessário
  });
}

const instagramIcon = document.getElementById('instagram');
if (instagramIcon) {
  instagramIcon.addEventListener('click', () => {
    window.location.href = '#'; // Defina o link real se necessário
  });
}

const twitterIcon = document.getElementById('twitter');
if (twitterIcon) {
  twitterIcon.addEventListener('click', () => {
    window.open('https://www.w3schools.com/howto/howto_css_icon_bar.asp', '_blank'); // Abre em uma nova aba
  });
}

const githubIcon = document.getElementById('github');
if (githubIcon) {
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/UnsDuds', '_blank'); // Abre em uma nova aba
  });
  
}
//Slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
