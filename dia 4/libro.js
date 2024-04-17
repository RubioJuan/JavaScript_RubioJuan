/*var libro = {
    titulo: "Habitos Atomicos",
    autor: "James CLear",
    genero: "Auto Ayuda",
    paginas: 336,
    idioma: "Español"
};

console.log("titulo:", libro.titulo);
console.log("autor:", libro.autor);
console.log("genero:", libro.genero);
console.log("paginas:", libro.paginas);
console.log("idioma:", libro.idioma);*/

/*function obtenerDetallesLibro(libro) {
    return `Título: ${libro.titulo}
Autor: ${libro.autor}
Género: ${libro.genero}
Páginas: ${libro.paginas}
Idioma: ${libro.idioma}`;
}

var libro = {
    titulo: "Hábitos Atómicos",
    autor: "James Clear",
    genero: "Autoayuda",
    paginas: 336,
    idioma: "Español"
};

console.log(obtenerDetallesLibro(libro));*/

function crearLibro() {
    var libro = {
        titulo: "Habitos Atomicos",
        genero: "Autoayuda",
        titulo: "tokyo ghoul",
        autor: "James Clear",
        generos: "horror, fantasia, thriller accion, drama, romance",
        paginas: 336,
    };
    return libro;
}

var miLibro = crearLibro();
console.log(miLibro);