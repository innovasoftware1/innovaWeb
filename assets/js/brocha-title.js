<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <title>Efecto de Pintura</title>
    <style>
        .slider-infinite-title {
            display: inline-block;
            position: relative;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            font-size: 48px; /* Tamaño grande */
            color: #ff5733; /* Color del texto */
            overflow: hidden; /* Ocultar el contenido que se sale del contenedor */
        }

        .paint-roller {
            position: absolute;
            top: 0;
            left: -100%; /* Comienza fuera de la vista */
            font-size: 48px; /* Tamaño del rodillo */
            transition: left 2s linear; /* Efecto suave */
        }
    </style>
</head>
<body>

<h1 class="slider-infinite-title">
    <span class="paint-roller"><i class="bi bi-paint-roller"></i></span>
    ¡Mira cómo aparece el título!
</h1>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.slider-infinite-title');
    const paintRoller = title.querySelector('.paint-roller');

    // Función para mover el rodillo y manejar la visibilidad del texto
    function roll() {
        // Mueve el rodillo al texto
        paintRoller.style.left = '0'; 
        title.style.color = '#ff5733'; // Muestra el título en color

        setTimeout(() => {
            paintRoller.style.left = '100%'; // Mueve el rodillo fuera del texto
            title.style.color = 'transparent'; // Oculta el título
        }, 2000); // Duración que el rodillo está "pintando"

        setTimeout(roll, 4000); // Reinicia el efecto después de que termine
    }

    roll(); // Inicia el efecto
});
</script>

</body>
</html>
