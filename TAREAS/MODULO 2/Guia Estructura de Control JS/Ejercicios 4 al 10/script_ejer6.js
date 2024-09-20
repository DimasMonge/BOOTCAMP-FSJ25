function calcularDescuento() {

    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    let descuento = 0;

    if (origen.toLowerCase() === 'palma') {
        if (destino === 'La costa del Sol') {
            descuento = 5;
        } else if (destino === 'Panchimalco') {
            descuento = 10;
        } else if (destino === 'Puerto el Triunfo') {
            descuento = 15;
        }
    }

    document.getElementById('resultado').innerHTML = 
        `Origen: ${origen}<br>Destino: ${destino}<br>Descuento aplicado: ${descuento}%`;
}