/*var persona = {
    nombre: "Juan Felipe Rubio Sanabria",
    edad: 17,
    ciudad: "Bucaramanga",
    nivelEstudio: "Bachiller",
    colorFavorito: "Rojo",
    comidaFavorita:"Hamburguesa"
};
  
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
console.log("nivelEstudio:", persona.nivelEstudio);
console.log("colorFavorito:", persona.colorFavorito);
console.log("comidaFavorita:", persona.comidaFavorita);*/


/*function obtenerDetallesPersona(persona) {
  return `Nombre: ${persona.nombre}
Edad: ${persona.edad}
Ciudad: ${persona.ciudad}
Nivel de Estudio: ${persona.nivelEstudio}
Color Favorito: ${persona.colorFavorito}
Comida Favorita: ${persona.comidaFavorita}`;
}

var persona = {
  nombre: "Juan Felipe Rubio Sanabria",
  edad: 17,
  ciudad: "Bucaramanga",
  nivelEstudio: "Bachiller",
  colorFavorito: "Rojo",
  comidaFavorita: "Hamburguesa"
};

console.log(obtenerDetallesPersona(persona));*/


// Para que se ejecute en la consola, se entra a la camperta que 
//se desea ejecutar y se pone despues node y el nombre de la carpete, en este 
//caso es node script.js



function persona() {
  var personas = {
    nombre: "Juan Felipe Rubio Sanabria",
  edad: 17,
  ciudad: "Bucaramanga",
  nivelEstudio: "Bachiller",
  colorFavorito: "Rojo",
  comidaFavorita: "Hamburguesa"
  };
  return personas;
}

var people = persona();
console.log(people);