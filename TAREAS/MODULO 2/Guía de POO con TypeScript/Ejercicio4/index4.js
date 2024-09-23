var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (deposito) {
        if (deposito < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += deposito;
            console.log("Se ha depositado correctamente $".concat(deposito, ". Saldo actual: $").concat(this.cantidad));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (this.cantidad < valor) {
            console.log("No hay suficiente saldo en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado $".concat(valor, ". Saldo restante: $").concat(this.cantidad));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de Cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de Cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
var miCuenta = new Cuenta("Juan Pérez", 100, "Ahorros", "123456789");
miCuenta.mostrarDatos();
miCuenta.depositar(3);
miCuenta.depositar(50);
miCuenta.retirar(200);
miCuenta.retirar(30);
