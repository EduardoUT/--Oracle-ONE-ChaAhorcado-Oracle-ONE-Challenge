/**
 * Dibujando ahorcado y letras incorrectas, según la cantidad de intentos.
 * @param {boolean} intentoFallido 
 * Parámetro obtenido en la función dibujarLetra(palabraUsuario, palabraAleatoriaActual);
 * @param {string} palabraIngresada 
 * Parámetro obtenido en la función dibujarLetra(palabraUsuario, palabraAleatoriaActual);
 * @param {string[]} color 
 * Parámetro obtenido del array coloresCanvas en canvas.js
 */
 function dibujarAhorcado(intentoFallido, palabraIngresada, color) {
    if (intentoFallido) {
        dibujarLetrasIncorrectas(palabraIngresada);
        if (intentos == 1) {
            dibujarBase(color);
        } else if (intentos == 2) {
            dibujarSoporteSoga(color);
        } else if (intentos == 3) {
            dibujarCuerda(color);
        } else if (intentos == 4) {
            dibujarCabeza(color);
        } else if (intentos == 5) {
            dibujarCuerpo(color);
        } else if (intentos == 6) {
            dibujarBrazoDerecho(color);
        } else if (intentos == 7) {
            dibujarBrazoIzquierdo(color);
        } else if (intentos == 8) {
            dibujarPieDerecho(color);
        } else if (intentos == 9) {
            dibujarPieIzquierdo(color);
        }
    }
}