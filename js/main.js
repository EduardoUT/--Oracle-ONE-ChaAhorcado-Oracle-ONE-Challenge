function generarJuego() {
    palabraAleatoria = generarPalabraAleatoria(array);
    letrasAcertadas = [];
    letrasFallidas = [];
    pLetrasFallidas.textContent = "";
    intentos = 0;
    limpiarCanvas();
    dibujarLienzo(coloresCanvas);
    limpiarElementosLi();
    crearElementosLi(palabraAleatoria);
    posicionarPuntero(campoLetraIngresada);
}

function mostrarSeccionJuego() {
    var mostrarJuego = document.querySelector(".main-content");
    mostrarJuego.classList.remove("main-content");
    mostrarJuego.classList.add("show-main-content");
}

function ocultarSeccionJuego() {
    var ocultarJuego = document.querySelector(".show-main-content");
    ocultarJuego.classList.remove("show-main-content");
    ocultarJuego.classList.add("main-content");
}
function ocultarSeccionHeader() {
    var ocultarBienvenida = document.querySelector(".seccion-bienvenida");
    ocultarBienvenida.classList.remove("seccion-bienvenida");
    ocultarBienvenida.classList.add("hide-header");
}

function mostrarSeccionHeader() {
    var mostrarBienvenida = document.querySelector(".hide-header");
    mostrarBienvenida.classList.add("seccion-bienvenida");
    mostrarBienvenida.classList.remove("hide-header");
}

function mostrarMensajeGanaste() {
    var mensajeGanaste = document.querySelector(".mensaje-ganaste-hidden");
    mensajeGanaste.classList.remove("mensaje-ganaste-hidden");
    mensajeGanaste.classList.add("show-mensaje-ganaste");
}

function mostrarMensajePerdiste() {
    var mensajePerdiste = document.querySelector(".mensaje-perdiste-hidden");
    mensajePerdiste.classList.remove("mensaje-perdiste-hidden");
    mensajePerdiste.classList.add("show-mensaje-perdiste");
}

