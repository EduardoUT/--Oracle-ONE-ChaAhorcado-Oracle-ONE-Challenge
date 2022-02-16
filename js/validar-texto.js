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
        var palabraIngresada = "";
        var valorCampo = this.value;

        for (var i = 0; i < valorCampo.length; i++) {
            for (var j = 0; j < filtro.length; j++) {
                if (filtro[j] == valorCampo[i]) {
                    palabraIngresada += valorCampo[i];

                }
            }
        }
        
        /**
         * Una vez obtenida toda la palabra, evalúo si es
         * una palabra menor o igual a 23 carácteres y la convierto
         * a mayúsculas, en caso contrario mando un alert informando
         * al usuario que excedió el límite y corta el valor excedente del input 
         * actual.
         */
    if (palabraIngresada.length <= 23) {
        textoMayusculas = palabraIngresada.toUpperCase();
        this.value = textoMayusculas;
    } else {
        alert("Límite de carácteres excedido.");
        this.value = this.value.slice(0, 23);
    }
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

    if (textoMayusculas != "") {
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