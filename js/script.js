document.addEventListener('DOMContentLoaded', () => {
  const productImage = document.getElementById('product-image');
  const structureRadios = document.getElementsByName('structure');

  function updateImage(event) {
    if (event.target.checked) {
      switch (event.target.value) {
        case 'rojo':
          productImage.src = 'img/cotizador/1/R.png';
          break;
        case 'azul':
          productImage.src = 'img/cotizador/1/R.png';
          break;
        case 'verde':
          productImage.src = 'img/cotizador/1/R.png';
          break;
        case 'marron':
            productImage.src = 'img/cotizador/1/R.png';
          break;
        default:
          productImage.src = 'img/cotizador/1/R.png';
      }

      productImage.style.maxWidth = '400px';
      productImage.style.maxHeight = '400px';

    }
  }

  for (let i = 0; i < structureRadios.length; i++) {
    structureRadios[i].addEventListener('change', updateImage);
  }

  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', () => {
    // Add your code for the next step here
  });
});

