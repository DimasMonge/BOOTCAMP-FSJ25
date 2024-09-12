//Programacion orientada a Objetos
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Conceptos princpales de POO o OOP --> Clases y los objetos
//Clases --> Molde para generar algo
//Objeto -->Lo que se genera en base  a ese molde
//Declaración de clase
var Auto = /** @class */ (function () {
    //Constructor -->Metodo reservado que nos sirve para instanciar objetos
    function Auto(numChasisParam, motorParam, colorParam, tipoCombustibleParam, transmisionParam, plazasParam, frenosParam, modeloParam, añoFabParam) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCombustibleParam;
        this.transmision = transmisionParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.anioFab = añoFabParam;
    }
    //Metodos --> acciones 
    Auto.prototype.encender = function () {
        console.log("Brun re brum");
    };
    Auto.prototype.apagar = function () {
        console.log("Chauchis");
    };
    return Auto;
}());
// Instanciar objetos atravez de una clase--> crear
var autito = new Auto(112, "v8", "azul", "gasolina", "Manual", 2, "ABC", "Huaray", 2018);
console.log(autito);
//Asignamos una propiedad
//autito.modelo = "Huayra";
//console.log(autito);
autito.motor = "v12";
console.log(autito);
