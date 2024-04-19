class forma {
    calcularArea(){
        return "Metodo de calculo de área de la forma base";
    }
}

// Definicion de la subclase
class Circulo extends forma {
    constructor(radio){
        super();
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio ** 2;
    }
}

class Triangulo extends forma {
    constructor(base, altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return (this.base * this.altura) / 2;
    }
}

const miCirculo = new Circulo(5);

const areaCirculo = miCirculo.calcularArea();
console.log("Area del Circulo:", areaCirculo);