class student {
    constructor(name, ticksRequired){
        this.name = name;
        this.ticksRequired = ticksRequired;
    }

    // Método para determinar si el estudiante pasa el año
    pass(){
        return this.ticksRequired >= 6;
        // El estudiante pasa si tiene al menos 6 ticks
    }
}

// Definición de la subclase NSStudent que hereda de Student
class NSStudent extends student {
    constructor(name){
        super(name, 4) 
        // El estudiante NS solo necesitan 4 ticks para pasar
    }
}

// Crear una lista de estudiantes que incluye estudiantes regulares y estudiantes NS
const students = [
    new student("Estudiante1", 6),
    new student("Estudiante2", 6),
    new NSStudent("EStudianteNS1"),
    new NSStudent("EStudianteNS2"),
]

// Iterar sobre la lista de estudiantes y determinar quiénes pasan el año
students.forEach(student =>{
    console.log(`${student.name} pasa el año: ${student.pass()}`)
});

/*forEach es un método de las arrays de JavaScript que se utiliza para 
iterar sobre los elementos de un array y ejecutar 
una función determinada en cada uno de ellos.  */