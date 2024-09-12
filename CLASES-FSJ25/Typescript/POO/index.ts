//Programacion orientada a Objetos
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

//Conceptos princpales de POO o OOP --> Clases y los objetos
//Clases --> Molde para generar algo
//Objeto -->Lo que se genera en base  a ese molde

//Declaración de clase
class Auto{
    //Caracteristicas generales -->Propiedades o atributos
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantKilometraje:string;
    plazas:number;
    frenos:string;
    modelo:string;
    anioFab:number;

    //Constructor -->Metodo reservado que nos sirve para instanciar objetos
    constructor (numChasisParam:number, motorParam:string, colorParam:string, tipoCombustibleParam:string, transmisionParam:string, 
        plazasParam:number, frenosParam:string, modeloParam:string,añoFabParam:number
    ) {
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
    encender ():void {
        console.log("Brun re brum");
    }

    apagar ():void {
        console.log("Chauchis");
    }
}

// Instanciar objetos atravez de una clase--> crear

let autito:Auto = new Auto ( 112,"v8", "azul", "gasolina", "Manual", 2, "ABC", "Huaray", 2018);
console.log(autito);

//Asignamos una propiedad
//autito.modelo = "Huayra";
//console.log(autito);

autito.motor = "v12"
console.log(autito);