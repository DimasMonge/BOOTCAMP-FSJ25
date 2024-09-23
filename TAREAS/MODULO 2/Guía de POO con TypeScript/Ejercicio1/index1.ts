class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;
    
    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "izquierda";
    }

    
    public obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    public establecerAlineacion(alineacion: "centrado" | "derecha" | "izquierda"): void {
        this.alineacion = alineacion;
    }

    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Mi Página", "Azul", "Arial");

console.log(cabecera.obtenerPropiedades());

cabecera.establecerAlineacion("centrado");

cabecera.imprimirPropiedades();