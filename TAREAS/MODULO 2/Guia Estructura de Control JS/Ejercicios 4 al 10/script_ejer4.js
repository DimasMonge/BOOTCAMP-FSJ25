//ACTIVIDAD 2: GUIA ESTRUCTURAS DE CONTROL JAVASCRIPT
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales";
    }
}

function calcularMayor() {
    const num1 = parseInt(prompt("Ingresa el primer número entero:"));
    const num2 = parseInt(prompt("Ingresa el segundo número entero:"));

    const mayor = numeroMayor(num1, num2);
    alert(`El número mayor es: ${mayor}`);
}