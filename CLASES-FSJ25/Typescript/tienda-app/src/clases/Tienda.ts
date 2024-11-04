import { Producto } from "./Producto";

export class Tienda{
    private productos:Producto[] = []; 

    constructor() {
        const productosLocalStorage = JSON.parse(localStorage.getItem('productos') || '[]');

        //Reconvertir los datos que tenemos en el localStorage a instancias de Producto
        //Si pongo el {} en el map tengo que poner de forma explicita el return
        this.productos = productosLocalStorage.map((producto:Producto)=>
            new Producto (producto.id, producto.nombre, producto.precio, producto.cantidad));
    }
    
    agregarProducto(producto:Producto){
        this.productos.push(producto);
        this.refrescarLocal();
    }

    // Guardamos todos los elementos de this.producto dentro del localStorage key "productos"
    refrescarLocal(){
        // Este guardado lo que hace es actualizar la lista de productos en el localStorage
        localStorage.setItem('productos', JSON.stringify(this.productos));
    }

    listarProductos(){
        return this.productos;
    }
}