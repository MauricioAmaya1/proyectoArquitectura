
// CAROUSEL 

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000, // Velocidad en milisegundos entre las transiciones de las imágenes
    dots: true, // Muestra los puntos de navegación
    arrows: false // Oculta las flechas de navegación (puedes ajustar según tus necesidades)
  });
});

// MOVIMIENTO PARA EL PRE FOOTER

function animation(){
  document.addEventListener("DOMContentLoaded", function() {
    var preFooter = document.querySelector('.pre-footer');
  
    function isInView(element) {
      var rect = element.getBoundingClientRect();
      return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  
    function handleScroll() {
      if (isInView(preFooter)) {
        preFooter.classList.add('active');
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    // Agrega un evento de desplazamiento para activar la animación cuando el elemento entra en la vista
    window.addEventListener('scroll', handleScroll);
  
    // Llama a handleScroll una vez al cargar la página para manejar el caso cuando el elemento ya está en la vista
    handleScroll();
  });
}


// FLECHA PARA SUBIR HASTA EL NAV

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  function toggleScrollToTopButton() {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  window.addEventListener("scroll", toggleScrollToTopButton);
  scrollToTopButton.addEventListener("click", scrollToTop);
});


animation();