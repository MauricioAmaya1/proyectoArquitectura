    // Cargar pie de página
    fetch('componentes/footer.html')
        .then(response => response.text())
        .then(html => document.body.insertAdjacentHTML('beforeend', html));
