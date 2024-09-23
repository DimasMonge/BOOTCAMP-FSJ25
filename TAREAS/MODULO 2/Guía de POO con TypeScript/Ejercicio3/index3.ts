class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; 
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    
    public getAutor(): string {
        return this.autor;
    }

    
    public mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}

const cancion = new Cancion("Don't you worry child", "Dance/Electrónica");
cancion.setAutor("Swedish House Mafia");

cancion.mostrarDatos();