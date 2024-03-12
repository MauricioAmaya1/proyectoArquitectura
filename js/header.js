

    // Cargar encabezado
    fetch('componentes/header.html')
        .then(response => response.text())
        .then(html => document.body.insertAdjacentHTML('afterbegin', html));
