// Declaracion de variable en JS
var varible = "Dimas";
// Declaracion de variable + tipo de dato em TS
var cadenaTexto = "Dimas";
var numero = 1;
var boleano = true;
// Declaracion de array
var arraycito = ["asd", "asd"];
var arrayNumerico = [2, 3, 24, 355];
// NUNCA UTILIZAR ESTO
var arrayMal = ["asd", 123, true];
// Array numerico o string
var arrayNumString = ["asd"];
// Concepto nuevo: Tuplas
var datosUsuario;
datosUsuario = ["asd", 12]; //Pero solo puedo guardar dos datos nadamas
// Funciones en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 2 + 8;
}
function saludar(nombre) {
    // Template string --> plantillas literales. Ingresar un dato JS en un string
    return 'Hola como estas? ${nombre}';
    //"Hola como estas? + nombre"
}
