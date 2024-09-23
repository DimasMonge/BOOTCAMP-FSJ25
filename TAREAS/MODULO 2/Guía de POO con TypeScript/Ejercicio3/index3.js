var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.getAutor()));
    };
    return Cancion;
}());
var cancion = new Cancion("Don't you worry child", "Dance/Electrónica");
cancion.setAutor("Swedish House Mafia");
cancion.mostrarDatos();
