function analizarNumeros() {
    // Obtener el valor ingresado por el usuario y convertirlo a un array
    const valores = document.getElementById('valores').value.split(',').map(Number);

    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let i = 0; i < valores.length; i++) {

        let num = valores[i];

        if (num < 0) {
            negativos++;
        }
        if (num > 0) {
            positivos++;
        }
        if (num % 15 === 0) {
            multiplosDe15++;
        }
        if (num % 2 === 0) {
            sumaPares += num;
        }
    }

    document.getElementById('resultado').innerHTML = `
        <strong>Resultados:</strong><br>
        Cantidad de números negativos: ${negativos}<br>
        Cantidad de números positivos: ${positivos}<br>
        Cantidad de múltiplos de 15: ${multiplosDe15}<br>
        Suma de números pares: ${sumaPares}
    `;
}