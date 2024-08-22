let cuentaClick = 0;
const alertaMensajes = [
    "Por favor",
    "Yo te amo",
    "¡Disculpame!",
    "Te amo",
    "Te extraño",
];

document.getElementById('boton-no').addEventListener('click', function () {
    document.getElementById('ratoncito').src = './gato-triste.gif';
    this.value = "No me quieres?";
    
    cuentaClick++;

    if (cuentaClick <= alertaMensajes.length) {
        alert(alertaMensajes[cuentaClick - 1]);
    } else {
        alert("Oprime el botón 'SI'");
    }
      // Minimizar el botón "NO" gradualmente
    let minimizarBotonNo = parseInt(window.getComputedStyle(this).fontSize);
    let nuevoTamaño = minimizarBotonNo - 5 > 0 ? minimizarBotonNo - 5 : 0;

    this.style.fontSize = nuevoTamaño + 'px';
    this.style.padding = nuevoTamaño + 'px ' + (nuevoTamaño + 5) + 'px';

    if (nuevoTamaño === 0) {
        this.style.display = 'none'; // Desaparece completamente si el tamaño es 0
    }
    
    // Selecciona el botón "SI"
    const botonSi = document.getElementById('boton-si');

    // Obtiene el tamaño actual del botón "SI"
    let tamañoActual = parseInt(window.getComputedStyle(botonSi).fontSize);

    // Incrementa el tamaño del botón "SI"
    botonSi.style.fontSize = (tamañoActual + 5) + 'px';
    botonSi.style.padding = (parseInt(window.getComputedStyle(botonSi).paddingTop) + 5) + 'px ' +
        (parseInt(window.getComputedStyle(botonSi).paddingLeft) + 15) + 'px';
});

document.getElementById('boton-si').addEventListener('click', function () {
    document.getElementById('ratoncito').src = './corazonrojo.gif';
    document.body.style.backgroundColor = "black";

     

    createHeartRain();
});

function createHeartRain() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        document.querySelector('.container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 200);

     // Mostrar "Te amo" en cascada
     const textoCascada = document.createElement('div');
     textoCascada.classList.add('texto-cascada');
     textoCascada.textContent = 'Te amo';
     document.body.appendChild(textoCascada);

     // Crear múltiples elementos en cascada
     for (let i = 0; i < 15; i++) {
         const clone = textoCascada.cloneNode(true);
         clone.style.left = Math.random() * 100 + 'vw';
         clone.style.animationDuration = (Math.random() * 2 + 3) + 's';
         document.body.appendChild(clone);
     }
}

