/**
 * @var campoAgregar:
 * Selector global para validar input text, limpiar y posicionar puntero.
 */
var campoAgregar = document.querySelector("#nueva-palabra");

/**
 * @var campoLetraIngresada:
 * Selector global para validar input text, limpiar y posicionar puntero.
 */
var campoLetraIngresada = document.querySelector("#letra-ingresada");

/**
 * @var filtro:
 * Contiene todos los carácteres admitidos en el teclado.
 */
var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

campoAgregar.addEventListener("input", function () {
    var textoMayusculas = "";
    var textoValidado = "";
    var valorCampo = this.value;

    for (var i = 0; i < valorCampo.length; i++) {
        for (var j = 0; j < filtro.length; j++) {
            if (filtro[j] == valorCampo[i]) {
                textoValidado += valorCampo[i];
            }
        }
    }

    textoMayusculas = textoValidado.toUpperCase();
    this.value = textoMayusculas;
});

campoLetraIngresada.addEventListener("input", function () {
    var textoMayusculas = "";
    var textoValidado = "";
    var valorCampo = this.value;

    for (var j = 0; j < filtro.length; j++) {
        if (filtro[j] == valorCampo) {
            textoValidado += valorCampo;
        }
    }

    textoMayusculas = textoValidado.toUpperCase();
    this.value = textoMayusculas;

    if(textoMayusculas != "") {
        setTimeout(function () {
            dibujarLetraAcertada(textoMayusculas, palabraAleatoriaActual);
            limpiarCampo(campoLetraIngresada);
        }, 300);
    }
});

/**
 * Posiciona el puntero en cualquier campo del DOM HTML.
 * @param {*} campo 
 * @returns campo.focus();
 */
function posicionarPuntero(campo) {
    return campo.focus();
}

/**
 * Limpia cualquier campo del DOM HTML.
 * @param {*} campo 
 * @returns ""
 */
function limpiarCampo(campo) {
    campo.value = "";

    return campo;
}