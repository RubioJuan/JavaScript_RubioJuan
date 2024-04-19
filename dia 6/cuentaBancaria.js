class cuentaBancaria {
    constructor(numeroCuenta, salarioInicial){
        this.numeroCuenta = numeroCuenta;
        this.saldo = salarioInicial;
    }
    depositar(cantidad){
        if(cantidad > 0){
            this.saldo += cantidad;
            console.log(`Se depositaron ${cantidad} pesos. Saldo actual: ${this.saldo}`)
    } else{
            console.log("La cantidad a depositar debe ser mayor a cero");
        }
    }
    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad;
            console.log(`Se retiraron ${cantidad} unidades. saldo actual: ${this.saldo}`);
        } else {
            console.log("No se puede retirar la cantidad espeficada. Saldo insuficiente.");
        }
    }
}

// Creando cuentas bancarias

const cuenta1 = new cuentaBancaria("123",1000);
const cuenta2 = new cuentaBancaria("12345", 500);

cuenta1.depositar(200);
cuenta2.depositar(300);

cuenta1.retirar(100);
cuenta2.retirar(600)