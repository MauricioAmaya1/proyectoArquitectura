    // Cargar pie de página
    fetch('showrooms.html')
        .then(response => response.text())
        .then(html => document.body.insertAdjacentHTML('beforeend', html));
