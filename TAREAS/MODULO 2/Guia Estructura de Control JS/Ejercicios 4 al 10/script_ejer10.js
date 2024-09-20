function calcularPromedios() {
    const promedioManana = (parseInt(m1.value) + parseInt(m2.value) + parseInt(m3.value) + parseInt(m4.value) + parseInt(m5.value)) / 5;
    const promedioTarde = (parseInt(t1.value) + parseInt(t2.value) + parseInt(t3.value) + parseInt(t4.value) + parseInt(t5.value) + parseInt(t6.value)) / 6;
    const promedioNoche = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value) + parseInt(n5.value) + parseInt(n6.value) + parseInt(n7.value) + parseInt(n8.value) + parseInt(n9.value) + parseInt(n10.value) + parseInt(n11.value)) / 11;

    let mayorPromedio = "Mañana";
    let promedioMayor = promedioManana;

    if (promedioTarde > promedioMayor) {
        mayorPromedio = "Tarde";
        promedioMayor = promedioTarde;
    }

    if (promedioNoche > promedioMayor) {
        mayorPromedio = "Noche";
        promedioMayor = promedioNoche;
    }

    document.getElementById('resultado').innerHTML = `
        Promedio Mañana: ${promedioManana.toFixed(2)}<br>
        Promedio Tarde: ${promedioTarde.toFixed(2)}<br>
        Promedio Noche: ${promedioNoche.toFixed(2)}<br>
        El turno con mayor promedio es: ${mayorPromedio} (${promedioMayor.toFixed(2)})
    `;
}