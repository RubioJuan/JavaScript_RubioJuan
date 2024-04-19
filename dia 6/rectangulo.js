/* Escriba un programa JavaScript para crear una clase llamada 'Rectángulo' con propiedades de ancho y alto.
Incluya dos métodos para calcular el área y el perímetro del rectángulo. Cree
una instancia de la clase 'Rectángulo' y calcule su área y perímetro.
*/

class Rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(){
        return this.ancho * this.alto;
    }
    calcularPerimetro(){
        return 2 * (this.ancho + this.alto);
    }
}

const miRectangulo = new Rectangulo(5,50);

// Calcular area
const area = miRectangulo.calcularArea();
console.log("Area del Rectangulo:", area);

// Calular Perimetro
const perimetro = miRectangulo.calcularPerimetro();
console.log("Perímetro del Rectangulo:", perimetro);