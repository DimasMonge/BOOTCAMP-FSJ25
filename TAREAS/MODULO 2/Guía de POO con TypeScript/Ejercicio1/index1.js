var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "izquierda";
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina("Mi Página", "Azul", "Arial");
console.log(cabecera.obtenerPropiedades());
cabecera.establecerAlineacion("centrado");
cabecera.imprimirPropiedades();
