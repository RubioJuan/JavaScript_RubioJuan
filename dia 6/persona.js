class persona {
    constructor(nombre, edad, pais){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
    obtener(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad} País: ${this.pais}`;
    }
}
const persona1 = new persona("Juan Felipe", 30, "Colombia");

console.log(persona1.obtener());