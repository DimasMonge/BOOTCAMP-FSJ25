//ACTIVIDAD 2: GUIA ESTRUCTURAS DE CONTROL JAVASCRIPT

//Ejercicio 1: Función comprovar edad

function edadUsuario (edad) {
    return edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad";
}

console.log(edadUsuario(20)); 
console.log(edadUsuario(16)); 

// Ejercicio 2: Función nota final

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    
    const porcentajeExamen = 0.20;
    const porcentajeTareas = 0.40;
    const porcentajeAsistencia = 0.10;
    const porcentajeInvestigacion = 0.30;


    const notaFinal = (examen * porcentajeExamen) +
                      (tareas * porcentajeTareas) +
                      (asistencia * porcentajeAsistencia) +
                      (investigacion * porcentajeInvestigacion);


    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal}`); 
}

calcularNotaFinal('Juan Pérez', '123456', 85, 90, 80, 95);

// Ejercicio 3: Función Aumento Salarial
function calcularAumento(nombreTrabajador, salarioActual, categoria) {
    let aumentoSalario;
    let salarioFinal;

    switch(categoria) {
        case "A":
            aumentoSalario = salarioActual * 0.15;
            break;
        case "B":
            aumentoSalario = salarioActual * 0.30;
            break;
        case "C":
            aumentoSalario = salarioActual * 0.10;
            break;
        case "D":
            aumentoSalario = salarioActual * 0.20;
            break;
    }

    salarioFinal = salarioActual + aumentoSalario;

    console.log(`Nombre Empleado: ${nombreTrabajador}`);
    console.log(`Salario Actual: ${salarioActual}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento Salarial: ${aumentoSalario}`);
    console.log(`Salario Final: ${salarioFinal}`);
}

calcularAumento("Dimas", 100.00, "B");
