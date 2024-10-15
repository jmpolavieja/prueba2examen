import { listaHTML } from "./fArticulos.js";
import { descuentosHTML, listaClientes } from "./fClientes.js";


function listadeArticulos() {
    const listado = listaHTML();
    const articulos = document.querySelector('#articulos');
    articulos.innerHTML = '';
    articulos.append(listado);
}

function clientes() {
    const listado = listaClientes();
    document.querySelector('#clientes').append(listado);
}

function categoriasClientes() {
    // const catCliArray = descuentos();
    const articulos = document.querySelector('#clientes');
    articulos.innerHTML = '';
    articulos.append(descuentosHTML());
}


window.listaArticulos = listadeArticulos;
window.listaClientes = clientes;
window.catCli = categoriasClientes;