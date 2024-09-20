function mostrarTabla() {

    const numero = parseInt(document.getElementById('numero').value);

    let tabla = `<h3>Tabla de multiplicar del ${numero}</h3>`;
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById('resultado').innerHTML = tabla;
}