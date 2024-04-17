/*function obtenerDetallesNumero(numero) {
    return `Numero :${numero.Numero}
Par: ${numero.Par}
Impar: ${numero.Impar}`;
}

var numero = {
    Numero: "72",
    "Par": "True",
    "Impar": "False"
};

console.log(obtenerDetallesNumero(numero))*/

function numero() {
    var numeros = {
        Numero: "72",
        "Par": "True",
        "Impar": "False"
    };
    return numeros;
}

var valor = numero();
console.log(valor);