/*var coche = {
    tipo: "Moto",
    modelo: "Ninja ZX-6R",
    marca: "Kawasaki",
    color: "Negra",
    año: 2022,
    velocidadMaxima: 280
};

console.log("tipo:", coche.tipo);
console.log("modelo:", coche.modelo);
console.log("marca:", coche.marca);
console.log("color:", coche.color);
console.log("año:", coche.año);
console.log("velocidadMaxima:", coche.velocidadMaxima);*/





/*function obtenerDetallesCoche(coche) {
    return `Tipo: ${coche.tipo}
Modelo: ${coche.modelo}
Marca: ${coche.marca}
Color: ${coche.color}
Año: ${coche.año}
Velocidad Máxima: ${coche.velocidadMaxima}`;
}

var coche = {
    tipo: "Moto",
    modelo: "Ninja ZX-6R",
    marca: "Kawasaki",
    color: "Negra",
    año: 2022,
    velocidadMaxima: 280
};

console.log(obtenerDetallesCoche(coche));*/



function coche() {
    var coches = {
        tipo: "Moto",
    modelo: "Ninja ZX-6R",
    marca: "Kawasaki",
    color: "Negra",
    año: 2022,
    velocidadMaxima: 280
    };
    return coches;
}

var Moto = coche();
console.log(Moto);