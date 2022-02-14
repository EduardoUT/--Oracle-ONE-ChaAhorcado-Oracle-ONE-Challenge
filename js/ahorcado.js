/**
 * @var elementoUl:
 * Selector global para elemnto padre ul. 
 */
var elementoUl = document.querySelector(".palabras");

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