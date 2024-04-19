class vehiculo {
    //Constructor crea e inicializar un objeto creado a partir de una clase.
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarDatos(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}
// extends sirve para crear una clase hija
class coche extends vehiculo {
    constructor(marca, modelo, año, puertas){
        super(marca, modelo, año)
        this.puertas = puertas;
    }
    mostrarDatos(){
        return `${super.mostrarDatos()}, Puertas: ${this.puertas}`
    }
}

const miCoche = new coche("Tesla","Model S", "2022", 4);

console.log(miCoche.mostrarDatos());