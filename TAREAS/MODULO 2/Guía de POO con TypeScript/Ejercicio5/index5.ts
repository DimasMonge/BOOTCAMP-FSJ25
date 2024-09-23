abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    abstract mostrarDatos(): void;

}


class Empleado extends Persona {
    public sueldo: number;
        
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {

        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;

    }

    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    public imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const empleado = new Empleado("Juan", "Pérez", "Av. Central 123", "555-1234", 30, 1500);

empleado.mostrarDatos();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
empleado.cargarSueldo(2000);
empleado.imprimirSueldo();  