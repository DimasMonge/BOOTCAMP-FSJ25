import { Producto } from './clases/Producto';
import { Tienda } from './clases/Tienda';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola desde MainTS</h1>

    <form id="formProducto">
      <section>
        <label>Nombre Producto</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre del producto">
      </section>

      <section>
        <label>Precio</label>
        <input type="text" id="precio" name="precio" placeholder="Ingresa su precio">
      </section>

      <section>
        <label>Cantidad</label>
        <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad">
      </section>

      <button type="submit">Agregar producto</button>
    </form>

    <ul id="productList"></ul>
    
  </div>
`

//Ininicializamos la tienda para poder manipular los productos
const tienda = new Tienda();

const productList = document.getElementById("productList") as HTMLDListElement;

//document.querySelector<HTMLElement>('#parrafo')!.innerHTML = "Esto es texto desde el p";
const form = document.getElementById("formProducto") as HTMLFormElement;
  
form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  console.log("Hola");

  const id = Date.now();
  //Seleccionamos los elementos a controlar y retiramos su valor con el value
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);  

  console.log(id);
  console.log(nombre);
  console.log(precio);
  console.log(cantidad);
  
  let productito = new Producto(id, nombre, precio, cantidad);
  console.log(productito);

  tienda.agregarProducto(productito);
  renderProductos();
  
});

function renderProductos(){
  productList.innerHTML = "";

  console.log(tienda.listarProductos());

  tienda.listarProductos().map((producto)=>{
    console.log(producto); 
    //Crea un elemento li por cada producto
    const productoItem = document.createElement('li');

    productoItem.textContent = `${producto.getNombre()} -Stock: ${producto.getCantidad()} -$ ${producto.getPrecio()}`;
    productList.appendChild(productoItem);
  })
  
}

renderProductos();