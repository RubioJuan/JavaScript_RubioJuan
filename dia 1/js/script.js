console.log("Hola mundo");
let juan = "juan Felipe"; 
let saludo = "Hola como estas?" + " " +juan;
console.log(saludo);


// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}
funcionNormal();
suma();
sumaR();
salonFavorito();




// ************************** BUCLE FOR *************************

arreglo=[123,"Rubio",true]
console.log(arreglo.length);

tamano = arreglo.length;

for (let i =0; i<tamano;i++){
    console.log(arreglo[i])
}

// ************* Eejrcicio #1 ********** 
// Se necesita ingresar un nuemor en grados Celsius para pasarlos a fahrenheit

let numero = prompt("Ingrese los grados Celsius para pasarlos a Fahrenheit");

function formula(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let resultado = formula(numero);
alert("El resultado en Fahrenheit es: " + resultado);