var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.potencia = function (a, b) {
        return Math.pow(a, b);
    };
    Calculadora.prototype.factorial = function (n) {
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log("Suma: ", calculadora.sumar(5, 3));
console.log("Resta: ", calculadora.restar(10, 4));
console.log("Multiplicación: ", calculadora.multiplicar(7, 6));
console.log("División: ", calculadora.dividir(15, 3));
console.log("Potencia: ", calculadora.potencia(2, 3));
console.log("Factorial: ", calculadora.factorial(5));
