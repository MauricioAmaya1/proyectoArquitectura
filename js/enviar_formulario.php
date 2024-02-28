<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $numero = $_POST["numero-celular"];
    $provincia = $_POST["provincia"];
    $ciudad = $_POST["ciudad"];
    $mensaje = $_POST["mensaje"];

    // Puedes personalizar el correo electrónico según tus necesidades
    $to = "mauricioamaya1997@gmail.com";
    $subject = "Nuevo mensaje de contacto";
    $message = "Nombre: $nombre\nApellido: $apellido\nCorreo: $correo\nNúmero de Celular: $numero\nProvincia: $provincia\nCiudad: $ciudad\nMensaje: $mensaje";

    // Envía el correo electrónico
    mail($to, $subject, $message);

    // Envía una respuesta al cliente
    echo "Mensaje enviado con éxito";
} else {
    // Si se intenta acceder directamente al archivo PHP, redirige a la página principal
    header("Location: index.html");
    exit();
}
?>
