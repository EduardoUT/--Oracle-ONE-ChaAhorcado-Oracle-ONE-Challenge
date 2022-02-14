/**
 * @var elementoUl:
 * Selector global para elemnto padre ul. 
 */
var elementoUl = document.querySelector(".palabras");

/**
 * @var pLetrasFallidas:
 * Selector global de elemento p en el DOM HTML.
 */
var pLetrasFallidas = document.querySelector(".letras-fallidas");

/**
 * @var array:
 * Array global de palabras.
 */
var array = ["ESCUELA", "PROGRAMACION", "ALURA", "ORACLE", "AMISTAD",
    "LATINOAMERICA", "VALORES", "JAVASCRIPT", "MEDIEVAL", "HORARIO",
    "SALUD", "OTORRINOLARINGOLOGO", "ESTERNOCLEIDOMASTOIDEO", "ROCK", "METAL",
    "PALMERA", "ESCULTURA", "ARTE", "ANTICONSTITUCIONALIDAD", "REVOLUCION"];

/**
 * @var palabraAleatoriaActual:
 * Array global que contiene las letras de la palabra 
 * aleatoria generada en @function generarJuego() en main.js.
 */
var palabraAleatoriaActual = [];

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
 * @var intentos:
 * Variable global numérica contador con límite de
 * 9 intentos usada en:
 * @function dibujarLetrasIncorrectas(): Aumenta el contador.
 * @function dibujarAhorcado(): Se evalúa la cantidad de intentos.
 * @function finJuego(): Termina el juego al llegar a 9 intentos.
 */
var intentos = 0;

/**
 * Generando una nueva palabra aleatoria, y separandola en chars
 * @param {string[]} array
 * Parámetro obtenido del array global @var array
 * @returns palabraSeparada;
 * Ejemplo palabraSeparada = ["H", "O", "L", "A"];
 */
function generarPalabraAleatoria(array) {
    var palabraRandom = array[Math.floor(Math.random() * array.length)];
    var palabraSeparada = splitPalabra(palabraRandom);

    return palabraSeparada;
}

/**
 * Separando la palabra aleatoria actual en chars.
 * @param {string[]} palabra 
 * @returns 
 * Palabra separada.
 */
function splitPalabra(palabra) {
    var separarPalabra = palabra;
    separarPalabra = palabra.split("");

    return separarPalabra;
}

/**
 * Creando elementos li hijos del elemento ul . 
 * con atributos de tipo class.
 * @param {string[]} palabraAleatoriaActual 
 * Parámetro obtenido del array global palabraAleatoriaActual actual.
 */
function crearElementosLi(palabraAleatoriaActual) {
    var nuevaLista;

    palabraAleatoriaActual.forEach(function () {
        nuevaLista = document.createElement("li");
        nuevaLista.setAttribute("class", "mis-palabras");
        elementoUl.appendChild(nuevaLista);
    });
}

/**
 * Limpiando elementos li del DOM HTML creados en: 
 * @function crearElementosLi();
 */
function limpiarElementosLi() {
    var listaExistente = document.querySelectorAll("li");
    listaExistente.forEach(function (lista) {
        lista.remove();
    });
}

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
function dibujarLetra(palabraUsuario, palabraAleatoriaActual) {
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

/**
 * Evalúa si el jugador ha ganado o perdido, en todo caso, le muestra
 * un mensaje por medio de las funcines:
 * @function mostrarMensajeGanaste();
 * @function mostrarMensajePerdiste();
 * @param {string[]} letrasAcertadas 
 * Parámetro del array global @var letrasAcertadas = []
 * @param {number} intentos 
 * Parámetro la variable numérica global @var intentos
 * @param {string[]} palabraAleatoriaActual 
 * Parámetro del array global @var palabraAleatoriaActual
 */
function finJuego(letrasAcertadas, intentos, palabraAleatoriaActual) {
    if (letrasAcertadas.length == palabraAleatoriaActual.length) {
        setTimeout(function () {
            mostrarMensajeGanaste();
        }, 1000);
    }

    if (intentos == 9) {
        setTimeout(function () {
            mostrarMensajePerdiste();
        }, 1000);
    }
}