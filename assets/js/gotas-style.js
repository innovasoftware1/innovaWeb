document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = ''; // Limpiar el contenido

    // Crear gotas
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        title.appendChild(span);
        
        // Posicionar cada letra
        span.style.position = 'relative';
        span.style.display = 'inline-block';
        span.style.transition = 'color 0.5s ease';
        
        // Añadir la clase de gota con un retraso
        setTimeout(() => {
            span.classList.add('drop');
        }, i * 100); // Retraso basado en la posición de la letra
    }

    // Desaparecer el título original y mostrar el nuevo
    setTimeout(() => {
        title.style.color = 'transparent';
    }, text.length * 100 + 500); // Esperar que caigan todas las gotas
});
