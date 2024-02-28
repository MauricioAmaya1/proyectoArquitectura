    // Cargar pie de página
    fetch('footer.html')
        .then(response => response.text())
        .then(html => document.body.insertAdjacentHTML('beforeend', html));
