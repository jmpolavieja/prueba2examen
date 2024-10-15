import { listaHTML } from "./fArticulos.js";
import { listaClientes } from "./fClientes.js";


function listadeArticulos() {
    console.log(listaHTML());
    const listado = listaHTML();
    document.querySelector('#articulos').append(listado);
}

function clientes() {
    const listado = listaClientes();
    document.querySelector('#clientes').append(listado);
}

window.listaArticulos = listadeArticulos;
window.listaClientes = clientes;