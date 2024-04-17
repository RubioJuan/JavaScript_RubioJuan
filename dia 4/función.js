function usuario(nombre, edad){
    this.nombre= nombre;
    this.edad = edad;
}

const yo = new usuario("Juan Felipe Rubio Sanabria", 17);
console.log(yo);