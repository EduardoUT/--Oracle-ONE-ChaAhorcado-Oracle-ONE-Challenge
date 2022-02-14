var campoAgregar = document.querySelector("#nueva-palabra");
var campoLetraIngresada = document.querySelector("#letra-ingresada");
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
            dibujarLetra(textoMayusculas);
            limpiarCampo(campoLetraIngresada);
        }, 300);
    }
});

function posicionarPuntero(campo) {
    return campo.focus();
}

function limpiarCampo(campo) {
    campo.value = "";

    return campo;
}