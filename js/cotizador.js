function mostrarImagen(id) {
  var imagenGrande = document.getElementById('imagen-grande');
  var imagenPequena = document.getElementById(id);

  imagenGrande.innerHTML = ''; // Limpiar el contenido actual
  var nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenPequena.src;
  nuevaImagen.alt = imagenPequena.alt;

  imagenGrande.appendChild(nuevaImagen);
}

function cargarNuevasImagenes() {
  var contenedorImagenes = document.querySelector('.contenedor-imagenes');
  var nuevasImagenesHTML = '';

  // Obtener el valor del botón de radio seleccionado
  var opcionSeleccionada = document.querySelector('input[name="imagen"]:checked');

  if (opcionSeleccionada) {
    var opcionId = opcionSeleccionada.id;

    switch (opcionId) {
      case 'radioA':
        nuevasImagenesHTML = `
          <div class="imagen-contenedor">
            <img class="imagen" id="AA" src="img/cotizador/2/AA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAA" onchange="mostrarImagen('AA')">
              <label for="radioAA">AA</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AM" src="img/cotizador/2/AM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAM" onchange="mostrarImagen('AM')">
              <label for="radioAM">AM</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AR" src="img/cotizador/2/AR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAR" onchange="mostrarImagen('AR')">
              <label for="radioAR">AR</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AV" src="img/cotizador/2/AV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAV" onchange="mostrarImagen('AV')">
              <label for="radioAV">AV</label>
            </div>
          </div>
        `;
        break;

      case 'radioM':
        nuevasImagenesHTML = `
          <div class="imagen-contenedor">
            <img class="imagen" id="MA" src="img/cotizador/2/MA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMA" onchange="mostrarImagen('MA')">
              <label for="radioMA">MA</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="MM" src="img/cotizador/2/MM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMM" onchange="mostrarImagen('MM')">
              <label for="radioMM">MM</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="MR" src="img/cotizador/2/MR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMR" onchange="mostrarImagen('MR')">
              <label for="radioMR">MR</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="MV" src="img/cotizador/2/MV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMV" onchange="mostrarImagen('MV')">
              <label for="radioMV">MV</label>
            </div>
          </div>
        `;
      break;

      case 'radioR':
        nuevasImagenesHTML = `
          <div class="imagen-contenedor">
            <img class="imagen" id="RA" src="img/cotizador/2/RA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioRA" onchange="mostrarImagen('RA')">
              <label for="radioRA">RA</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="RM" src="img/cotizador/2/RM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioRM" onchange="mostrarImagen('RM')">
              <label for="radioRM">RM</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="RR" src="img/cotizador/2/RR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioRR" onchange="mostrarImagen('RR')">
              <label for="radioRR">RR</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="RV" src="img/cotizador/2/RV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMV" onchange="mostrarImagen('RV')">
              <label for="radioRV">RV</label>
            </div>
          </div>
        `;
      break;

      case 'radioV':
        nuevasImagenesHTML = `
          <div class="imagen-contenedor">
            <img class="imagen" id="VA" src="img/cotizador/2/VA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioVA" onchange="mostrarImagen('VA')">
              <label for="radioVA">VA</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="VM" src="img/cotizador/2/VM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioVM" onchange="mostrarImagen('VM')">
              <label for="radioVM">VM</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="VR" src="img/cotizador/2/VR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioVR" onchange="mostrarImagen('VR')">
              <label for="radioVR">VR</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="VV" src="img/cotizador/2/VV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioVV" onchange="mostrarImagen('VV')">
              <label for="radioMV">VV</label>
            </div>
          </div>
        `;
      break;

default:
  console.error('Opción no válida:', opcionId);
  break;
}

// Eliminar las primeras 4 imágenes del contenedor
contenedorImagenes.innerHTML = '';

// Agregar las nuevas imágenes al contenedor existente sin reemplazar todo el contenido
contenedorImagenes.insertAdjacentHTML('beforeend', nuevasImagenesHTML);

    switch (opcionId) {
      case 'radioAA':
        contenedorImagenes.insertAdjacentHTML('beforeend', `
          <div class="imagen-contenedor">
            <img class="imagen" id="AAG" src="img/cotizador/3/gris/AA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAAG" onchange="mostrarImagen('AAG')">
              <label for="radioAAG">AAG</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AAN" src="img/cotizador/3/negro/AA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAAN" onchange="mostrarImagen('AAN')">
              <label for="radioAAN">AAN</label>
            </div>
          </div>
        `);
        break;

      case 'radioAAN':
      case 'radioAAG':
        var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
        siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

        var msgFinal = document.querySelector('h1');
        msgFinal.textContent = 'Pronto nos estaremos contactando!';
        break;

      case 'radioAM':
        contenedorImagenes.insertAdjacentHTML('beforeend', `
          <div class="imagen-contenedor">
            <img class="imagen" id="AMG" src="img/cotizador/3/gris/AM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAMG" onchange="mostrarImagen('AMG')">
              <label for="radioAMG">AMG</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AMN" src="img/cotizador/3/negro/AM.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAMN" onchange="mostrarImagen('AMN')">
              <label for="radioAMN">AMN</label>
            </div>
          </div>
        `);
        break;

      case 'radioAMN':
      case 'radioAMG':
        var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
        siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

        var msgFinal = document.querySelector('h1');
        msgFinal.textContent = 'Pronto nos estaremos contactando!';
        break;

      case 'radioAR':
        contenedorImagenes.insertAdjacentHTML('beforeend', `
          <div class="imagen-contenedor">
            <img class="imagen" id="ARG" src="img/cotizador/3/gris/AR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioARG" onchange="mostrarImagen('ARG')">
              <label for="radioARG">ARG</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="ARN" src="img/cotizador/3/negro/AR.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioARN" onchange="mostrarImagen('ARN')">
              <label for="radioAMN">ARN</label>
            </div>
          </div>
        `);
        break;

      case 'radioARN':
      case 'radioARG':
        var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
        siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

        var msgFinal = document.querySelector('h1');
        msgFinal.textContent = 'Pronto nos estaremos contactando!';
        break;

      case 'radioAV':
        contenedorImagenes.insertAdjacentHTML('beforeend', `
          <div class="imagen-contenedor">
            <img class="imagen" id="AVG" src="img/cotizador/3/gris/AV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAVG" onchange="mostrarImagen('AVG')">
              <label for="radioAVG">AVG</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="AVN" src="img/cotizador/3/negro/AV.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioAVN" onchange="mostrarImagen('AVN')">
              <label for="radioAVN">AVN</label>
            </div>
          </div>
        `);
        break;

      case 'radioAVN':
      case 'radioAVG':
        var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
        siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

        var msgFinal = document.querySelector('h1');
        msgFinal.textContent = 'Pronto nos estaremos contactando!';
        break;

      // CASOS DEL MARRON 

      case 'radioMA':
        contenedorImagenes.insertAdjacentHTML('beforeend', `
          <div class="imagen-contenedor">
            <img class="imagen" id="MAG" src="img/cotizador/3/gris/MA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMAG" onchange="mostrarImagen('MAG')">
              <label for="radioMAG">MAG</label>
            </div>
          </div>

          <div class="imagen-contenedor">
            <img class="imagen" id="MAN" src="img/cotizador/3/negro/MA.png" alt="Imagen 1">
            <div class="boton-radio">
              <input type="radio" name="imagen" id="radioMAN" onchange="mostrarImagen('MAN')">
              <label for="radioMAN">MAN</label>
            </div>
          </div>
        `);
        break;

      case 'radioMAN':
      case 'radioMAG':
        var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
        siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

        var msgFinal = document.querySelector('h1');
        msgFinal.textContent = 'Pronto nos estaremos contactando!';
        break;

        case 'radioMR':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="MRG" src="img/cotizador/3/gris/MR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMRG" onchange="mostrarImagen('MRG')">
                <label for="radioMRG">MRG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="MRN" src="img/cotizador/3/negro/MR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMRN" onchange="mostrarImagen('MRN')">
                <label for="radioMRN">MRN</label>
              </div>
            </div>
          `);
          break;

        case 'radioMRN':
        case 'radioMRG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioMV':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="MVG" src="img/cotizador/3/gris/MV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMVG" onchange="mostrarImagen('MVG')">
                <label for="radioMVG">MVG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="MVN" src="img/cotizador/3/negro/MV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMVN" onchange="mostrarImagen('MVN')">
                <label for="radioMVN">MVN</label>
              </div>
            </div>
          `);
          break;

        case 'radioMVN':
        case 'radioMVG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioMM':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="MMG" src="img/cotizador/3/gris/MM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMMG" onchange="mostrarImagen('MMG')">
                <label for="radioMMG">MMG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="MMN" src="img/cotizador/3/negro/MM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioMMN" onchange="mostrarImagen('MMN')">
                <label for="radioMMN">MMN</label>
              </div>
            </div>
          `);
          break;

        case 'radioMMN':
        case 'radioMMG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;


          // CASOS DEL ROJO

          case 'radioRA':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="RAG" src="img/cotizador/3/gris/RA.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRAG" onchange="mostrarImagen('RAG')">
                <label for="radioRAG">RAG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="RAN" src="img/cotizador/3/negro/RA.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRAN" onchange="mostrarImagen('RAN')">
                <label for="radioRAN">RAN</label>
              </div>
            </div>
          `);
          break;

        case 'radioRAN':
        case 'radioRAG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioRM':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="RMG" src="img/cotizador/3/gris/RM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRMG" onchange="mostrarImagen('RMG')">
                <label for="radioRMG">RMG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="RMN" src="img/cotizador/3/negro/RM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRMN" onchange="mostrarImagen('RMN')">
                <label for="radioRMN">RMN</label>
              </div>
            </div>
          `);
          break;

        case 'radioRMN':
        case 'radioRMG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioRR':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="RRG" src="img/cotizador/3/gris/RR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRRG" onchange="mostrarImagen('RRG')">
                <label for="radioRRG">RRG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="RRN" src="img/cotizador/3/negro/RR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRRN" onchange="mostrarImagen('RRN')">
                <label for="radioRRN">RRN</label>
              </div>
            </div>
          `);
          break;

        case 'radioRRN':
        case 'radioRRG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioRV':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="RVG" src="img/cotizador/3/gris/RV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRVG" onchange="mostrarImagen('RVG')">
                <label for="radioRVG">RVG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="RVN" src="img/cotizador/3/negro/RV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioRVN" onchange="mostrarImagen('RVN')">
                <label for="radioRVN">RVN</label>
              </div>
            </div>
          `);
          break;

        case 'radioRVN':
        case 'radioRVG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

          // CASOS DEL VERDE

          case 'radioVA':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="VAG" src="img/cotizador/3/gris/VA.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVAG" onchange="mostrarImagen('VAG')">
                <label for="radioVAG">VAG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="VAN" src="img/cotizador/3/negro/VA.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVAN" onchange="mostrarImagen('VAN')">
                <label for="radioVAN">VAN</label>
              </div>
            </div>
          `);
          break;

        case 'radioVAN':
        case 'radioVAG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioVM':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="VMG" src="img/cotizador/3/gris/VM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVMG" onchange="mostrarImagen('VMG')">
                <label for="radioVMG">VMG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="VMN" src="img/cotizador/3/negro/VM.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVMN" onchange="mostrarImagen('VMN')">
                <label for="radioVMN">VMN</label>
              </div>
            </div>
          `);
          break;

        case 'radioVMN':
        case 'radioVMG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioVR':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="VRG" src="img/cotizador/3/gris/VR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVRG" onchange="mostrarImagen('VRG')">
                <label for="radioVRG">VRG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="VRN" src="img/cotizador/3/negro/VR.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVRN" onchange="mostrarImagen('VRN')">
                <label for="radioVRN">VRN</label>
              </div>
            </div>
          `);
          break;

        case 'radioVRN':
        case 'radioVRG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;

        case 'radioVV':
          contenedorImagenes.insertAdjacentHTML('beforeend', `
            <div class="imagen-contenedor">
              <img class="imagen" id="VVG" src="img/cotizador/3/gris/VV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVVG" onchange="mostrarImagen('VVG')">
                <label for="radioVVG">VVG</label>
              </div>
            </div>

            <div class="imagen-contenedor">
              <img class="imagen" id="VVN" src="img/cotizador/3/negro/VV.png" alt="Imagen 1">
              <div class="boton-radio">
                <input type="radio" name="imagen" id="radioVVN" onchange="mostrarImagen('VVN')">
                <label for="radioVVN">VVN</label>
              </div>
            </div>
          `);
          break;

        case 'radioVVN':
        case 'radioVVG':
          var siguienteSeccionBoton = document.querySelector('.siguiente-seccion');
          siguienteSeccionBoton.textContent = 'Finalizado, Muchas Gracias!';

          var msgFinal = document.querySelector('h1');
          msgFinal.textContent = 'Pronto nos estaremos contactando!';
          break;


    }






} else {
alert('Por favor, seleccione una opción antes de pasar a la siguiente sección.');
}

}


