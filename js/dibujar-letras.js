/**
 * @var pLetrasFallidas:
 * Selector global de elemento p en el DOM HTML.
 */
 var pLetrasFallidas = document.querySelector(".letras-erroneas");

 /**
 * @var letrasFallidas:
 * Array global de las letras fallidas, usada en:
 * @function dibujarLetrasIncorrectas();
 */
var letrasFallidas = [];

/**
 * @var letrasAcertadas:
 * Array global de letras acertadas, usada en:
 * @function dibujarLetra();
 */
var letrasAcertadas = [];

/**
 * 1. Dibuja la letra en el DOM HTTML.
 * 2. Dibuja el Ahorcado en el Canvas.
 * 3. Evalúa fin del juego.
 * @param {string} palabraUsuario 
 * Parámetro obtenido del evento del input text @var campoLetraIngresada
 * en validar-texto.js
 * @param {string[]} palabraAleatoriaActual 
 * Parámetro obtenido del array palabraAleatoriaActual global actual.
 */
 function dibujarLetraAcertada(palabraUsuario, palabraAleatoriaActual) {
    var elementoLi = document.querySelectorAll(".mis-palabras");
    var palabraEquivocada = true;
    var posicionLetra;
    var letraArrayAleatorio;
    var textNode;
    //El primer ciclo for permite iterar en la palabra aleatoria actual.      
    for (var i = 0; i < palabraAleatoriaActual.length; i++) {
        /** 
         * Evaluando si la letra ingresada por el usuario
         * coincide con alguna letra en la palabra aleatoria.
         */
        if (palabraUsuario == palabraAleatoriaActual[i]) {
            /**
             * Obtengo la letra de la palabraAleatoriaActual.  
             * Obtengo la posición en el arreglo de la letra.
             */
            letraArrayAleatorio = palabraAleatoriaActual[i];
            posicionLetra = i;
            //Iteración por los elementos li existentes.
            for (var j = 0; j < elementoLi.length; j++) {
                //Asignando el valor del elemento li de acuerdo a la posición de la letra.
                var valorElementoLi = elementoLi[posicionLetra];
                //Creando un textNode asignandole la letra.
                textNode = document.createTextNode(letraArrayAleatorio);
                /**
                 * Evaluando si el elemento li actual no tiene ningún childNode.
                 * También me permite evitar ingresar valores duplicados en las letrasAcertadas y
                 * los elementos li.
                 */
                if (!valorElementoLi.hasChildNodes(textNode)) {
                    //Asigno la letra del arreglo aleatorio al elemento o los elementos li.
                    valorElementoLi.appendChild(textNode);
                    //Ingreso las coincidencias en el arreglo de letrasAcertadas.
                    letrasAcertadas.push(palabraUsuario);
                    palabraEquivocada = false;
                }
                break;
            }
        }
    }
    dibujarAhorcado(palabraEquivocada, palabraUsuario, coloresCanvas);
    finJuego(letrasAcertadas, intentos, palabraAleatoriaActual);
}

/**
 * Agregando al arreglo letrasFallidas las letras que no sean acertadas y
 * mostrando el resultado al usuario en un elemento p
 * @param {string} palabraIngresada 
 * Parámetro obtenido en:
 * @function dibujarAhorcado();
 */
 function dibujarLetrasIncorrectas(palabraIngresada) {
    if (!letrasFallidas.includes(palabraIngresada) && !letrasAcertadas.includes(palabraIngresada) && intentos < 9) {
        letrasFallidas.push(palabraIngresada);
        var mensaje = "Letras Incorrectas: ";
        pLetrasFallidas.textContent = mensaje + letrasFallidas;
        intentos++;
    }
}