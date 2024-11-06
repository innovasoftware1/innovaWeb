function mostrarOcultarValla() {
    const valla = document.querySelector('.valla');
    const camion = document.querySelector('.camion');

    valla.style.display = 'none'; 

    setTimeout(function() {
        valla.style.display = 'block'; 

        setTimeout(function() {
            valla.style.display = 'none';

            camion.style.animation = 'none';
            camion.offsetHeight; 
            camion.style.animation = '';

            mostrarOcultarValla();
        }, 7000);
    }, 7000);
}

// inciio de procesoo
mostrarOcultarValla();
