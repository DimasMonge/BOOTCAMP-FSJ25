// Ejercicio 5
function calcularDescuento() {
    // Obtener el coche seleccionado
    const coche = document.getElementById('coche').value;
    let descuento;

    // Determinar el descuento basado en el coche seleccionado
    switch (coche) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            descuento = 20;
            break;
        default:
            descuento = 0;
            break;
    }

    // Mostrar el coche y el descuento
    document.getElementById('resultado').innerHTML =`Coche seleccionado: ${coche}<br>Descuento aplicado: ${descuento}%`;

}