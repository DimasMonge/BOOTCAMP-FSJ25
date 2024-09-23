class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;


    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }


    public depositar(deposito: number): void {
        if (deposito < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += deposito;
            console.log(`Se ha depositado correctamente $${deposito}. Saldo actual: $${this.cantidad}`);
        }
    }


    public retirar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (this.cantidad < valor) {
            console.log("No hay suficiente saldo en la cuenta.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
}


const miCuenta = new Cuenta("Juan Pérez", 100, "Ahorros", "123456789");


miCuenta.mostrarDatos();

miCuenta.depositar(3);

miCuenta.depositar(50);

miCuenta.retirar(200);

miCuenta.retirar(30);