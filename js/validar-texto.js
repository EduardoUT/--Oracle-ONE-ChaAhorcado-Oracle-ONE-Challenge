var campoAgregar = document.querySelector("#nueva-palabra");
var campoLetraIngresada = document.querySelector("#letra-ingresada");
var filtro = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

campoAgregar.addEventListener("input", validarCampoAgregar);
campoLetraIngresada.addEventListener("input", validarCampoLetraIngresada);

function validarCampoAgregar() {

    var textoMayusculas = "";
    var textoValidado = "";
    var valorCampo = campoAgregar.value;

    for (var i = 0; i < valorCampo.length; i++) {
        for (var j = 0; j < filtro.length; j++) {
            if (filtro[j] == valorCampo[i]) {
                textoValidado += valorCampo[i];
            }
        }
    }

    textoMayusculas = textoValidado.toUpperCase();
    campoAgregar.value = textoMayusculas;
}

function validarCampoLetraIngresada() {

    var textoMayusculas = "";
    var textoValidado = "";
    var valorCampo = campoLetraIngresada.value;

    for (var i = 0; i < valorCampo.length; i++) {
        for (var j = 0; j < filtro.length; j++) {
            if (filtro[j] == valorCampo[i]) {
                textoValidado += valorCampo[i];
            }
        }
    }
    textoMayusculas = textoValidado.toUpperCase();
    campoLetraIngresada.value = textoMayusculas;

    return textoMayusculas;
}

function posicionarPuntero(campo) {
    return campo.focus();
}

function limpiarCampo(campo) {
    campo.value = "";

    return campo;
}
