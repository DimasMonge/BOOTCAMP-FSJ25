// Declaracion de variable en JS
let varible = "Dimas";

// Declaracion de variable + tipo de dato em TS
let cadenaTexto:string = "Dimas";
let numero:number =  1;
let boleano:boolean = true;

// Declaracion de array
let arraycito:string[] = ["asd", "asd"];

let arrayNumerico:number[] = [2,3,24,355];

// NUNCA UTILIZAR ESTO
let arrayMal:any[] = ["asd", 123, true];

// Array numerico o string
let arrayNumString:number[]|string[] = ["asd"];

// Concepto nuevo: Tuplas
let datosUsuario:[string,number];
datosUsuario = ["asd", 12] //Pero solo puedo guardar dos datos nadamas

// Funciones en TS
function tipoVoid ():void {
    console.log("Chauchis");
}

function sumar ():number {
    return 2+2;
}

function sumarOConcatenar ():number|string {
    return 2+8;
}

function saludar (nombre:string):string {
    // Template string --> plantillas literales. Ingresar un dato JS en un string
    return 'Hola como estas? ${nombre}'; 
    //"Hola como estas? + nombre"
}