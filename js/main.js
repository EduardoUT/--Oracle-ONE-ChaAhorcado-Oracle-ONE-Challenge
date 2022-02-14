/**
 * Función general, reestablece todos los valores del juego
 * del ahorcado.
 */
function generarJuego() {
    palabraAleatoriaActual = generarPalabraAleatoria(array);
    letrasAcertadas = [];
    letrasFallidas = [];
    pLetrasFallidas.textContent = "";
    intentos = 0;
    limpiarCanvas();
    dibujarLienzo(coloresCanvas);
    limpiarElementosLi();
    crearElementosLi(palabraAleatoriaActual);
    posicionarPuntero(campoLetraIngresada);
}

/**
 * Remueve la clase main-content, y agrega show-main-content
 */
function mostrarSeccionJuego() {
    var mostrarJuego = document.querySelector(".main-content");
    mostrarJuego.classList.remove("main-content");
    mostrarJuego.classList.add("show-main-content");
}

/**
 * Remueve la clase show-main-content, y agrega main-content
 */
function ocultarSeccionJuego() {
    var ocultarJuego = document.querySelector(".show-main-content");
    ocultarJuego.classList.remove("show-main-content");    ocultarJuego.classList.add("main-content");
}

/**
 * Remueve la clase seccion-bienvenida, y agrega hide-header
 */
function ocultarSeccionHeader() {
    var ocultarBienvenida = document.querySelector(".seccion-bienvenida");
    ocultarBienvenida.classList.remove("seccion-bienvenida");
    ocultarBienvenida.classList.add("hide-header");
}

/**
 * Remueve la clase hide-header, y agrega seccion-bienvenida
 */
function mostrarSeccionHeader() {
    var mostrarBienvenida = document.querySelector(".hide-header");
    mostrarBienvenida.classList.remove("hide-header");
    mostrarBienvenida.classList.add("seccion-bienvenida");
}

/**
 * Remueve la clase mensaje-ganaste-hidden, y agrega show-mensaje-ganaste
 */
function mostrarMensajeGanaste() {
    var mensajeGanaste = document.querySelector(".mensaje-ganaste-hidden");
    mensajeGanaste.classList.remove("mensaje-ganaste-hidden");
    mensajeGanaste.classList.add("show-mensaje-ganaste");
}

/**
 * Remueve la clase mensaje-perdiste-hidden, y agrega show-mensaje-perdiste
 */
function mostrarMensajePerdiste() {
    var mensajePerdiste = document.querySelector(".mensaje-perdiste-hidden");
    mensajePerdiste.classList.remove("mensaje-perdiste-hidden");
    mensajePerdiste.classList.add("show-mensaje-perdiste");
}

