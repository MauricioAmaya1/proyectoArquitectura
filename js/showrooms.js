    // Cargar pie de página
    fetch('componentes/showrooms.html')
        .then(response => response.text())
        .then(html => document.body.insertAdjacentHTML('beforeend', html));
