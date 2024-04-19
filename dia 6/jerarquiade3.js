class A {
    constructor(arg){
        this.argA = arg;
    }
}

// Definicion de la clase B que hereda de A 
class B extends A {
    constructor(arg){
        super(arg);
        this.argB = arg;
    }
}

// Definición de la clase C que hereda de B
class C extends B {
    constructor(arg){
        super(arg);
        this.argC = arg;
    }
}

const myC = new C("Argumento");

// Verificación de los argumentos en cada nivel de la jerarquia
console.log("Argumento en A:", myC.argA);
console.log("Argumento en B:", myC.argB);
console.log("Argumento en C:", myC.argC); 