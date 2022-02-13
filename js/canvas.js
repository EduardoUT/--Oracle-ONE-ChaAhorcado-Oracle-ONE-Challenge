
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");


function dibujarLienzo() {
    pincel.fillStyle = "white";
    pincel.fillRect(0, 0, 700, 390);
}


function dibujarBase() {
    pincel.fillStyle = "rgb(12, 12, 12)";
    pincel.beginPath();
    pincel.moveTo(20, 140);
    pincel.lineTo(80, 140);
    pincel.lineTo(50, 120);
    pincel.closePath();
    pincel.fill();

    pincel.fillStyle = "rgb(12, 12, 12)";
    pincel.fillRect(47.5, 10, 5, 120);
}

function dibujarSoporteSoga() {
    //Palo superior
    pincel.fillStyle = "rgb(12, 12, 12)";
    pincel.fillRect(30, 10, 120, 5);

    //Triengulos
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(51, 61);
    pincel.lineTo(51, 15);
    pincel.lineTo(120, 15);
    pincel.fill();
    pincel.closePath();

    //Triangulos
    pincel.beginPath();
    pincel.fillStyle = "white";
    pincel.moveTo(52.5, 52);
    pincel.lineTo(52.5, 15);
    pincel.lineTo(110, 15);
    pincel.fill();
    pincel.closePath();
}

function dibujarCuerda() {
    pincel.fillStyle = "rgb(12, 12, 12)";
    pincel.fillRect(133, 10, 2, 28);
}

function dibujarCabeza() {
    pincel.beginPath();
    pincel.fillStyle = "white";
    pincel.strokeStyle = "black";
    pincel.arc(134, 48, 10, 0, 2 * Math.PI);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
}

function dibujarCuerpo() {
    pincel.fillStyle = "rgb(12, 12, 12)";
    pincel.fillRect(133, 59, 2, 50);
}

function dibujarBrazoDerecho() {
    pincel.beginPath();
    pincel.strokeStyle = "black"
    pincel.moveTo(133, 70);
    pincel.lineTo(120, 95);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoIzquierdo() {
    pincel.beginPath();
    pincel.strokeStyle = "rgb(12, 12, 12)";
    pincel.moveTo(135, 70);
    pincel.lineTo(150, 95);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPieDerecho() {
    pincel.beginPath();
    pincel.strokeStyle = "rgb(12, 12, 12)";
    pincel.moveTo(134, 109);
    pincel.lineTo(115, 130);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPieIzquierdo() {
    pincel.beginPath();
    pincel.strokeStyle = "rgb(12, 12, 12)";
    pincel.moveTo(134, 109);
    pincel.lineTo(155, 130);
    pincel.stroke();
    pincel.closePath();
}

function limpiarCanvas() {
    pincel.clearRect(0, 0, 800, 390);
}
