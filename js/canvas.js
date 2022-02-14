
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");
var coloresCanvas = ["rgb(12, 12, 12)","rgb(255, 255, 255)"];

function dibujarLienzo(color) {
    pincel.fillStyle = color[1];
    pincel.fillRect(0, 0, 700, 390);
}

function dibujarBase(color) {
    pincel.fillStyle = color[0];
    pincel.beginPath();
    pincel.moveTo(20, 140);
    pincel.lineTo(80, 140);
    pincel.lineTo(50, 120);
    pincel.closePath();
    pincel.fill();
    pincel.fillStyle = color[0];
    pincel.fillRect(47.5, 10, 5, 120);
}

function dibujarSoporteSoga(color) {
    //Palo superior
    pincel.fillStyle = color[0];
    pincel.fillRect(30, 10, 120, 5);

    //Triengulos
    pincel.beginPath();
    pincel.fillStyle = color[0];
    pincel.moveTo(51, 61);
    pincel.lineTo(51, 15);
    pincel.lineTo(120, 15);
    pincel.fill();
    pincel.closePath();

    //Triangulos
    pincel.beginPath();
    pincel.fillStyle = color[1];
    pincel.moveTo(52.5, 52);
    pincel.lineTo(52.5, 15);
    pincel.lineTo(110, 15);
    pincel.fill();
    pincel.closePath();
}

function dibujarCuerda(color) {
    pincel.fillStyle = color[0];
    pincel.fillRect(133, 10, 2, 28);
}

function dibujarCabeza(color) {
    pincel.beginPath();
    pincel.fillStyle = color[1];
    pincel.strokeStyle = color[0];
    pincel.arc(134, 48, 10, 0, 2 * Math.PI);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function dibujarCuerpo(color) {
    pincel.fillStyle = color[0];
    pincel.fillRect(133, 59, 2, 50);
}

function dibujarBrazoDerecho(color) {
    pincel.beginPath();
    pincel.strokeStyle = color[0];
    pincel.moveTo(133, 70);
    pincel.lineTo(120, 95);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoIzquierdo(color) {
    pincel.beginPath();
    pincel.strokeStyle = color[0];
    pincel.moveTo(135, 70);
    pincel.lineTo(150, 95);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPieDerecho(color) {
    pincel.beginPath();
    pincel.strokeStyle = color[0];
    pincel.moveTo(134, 109);
    pincel.lineTo(115, 130);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPieIzquierdo(color) {
    pincel.beginPath();
    pincel.strokeStyle = color[0];
    pincel.moveTo(134, 109);
    pincel.lineTo(155, 130);
    pincel.stroke();
    pincel.closePath();
}

function limpiarCanvas() {
    pincel.clearRect(0, 0, 800, 390);
}