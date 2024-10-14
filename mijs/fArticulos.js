const listaArticulos = [
    'raton', 'teclado', 'pantalla', 'alfombrilla', 'torreCPU', 'procesador', 'tarjetaGrafica'
];

export function listaHTML() {
    // Creamos una lista de artículos
    const ul = document.createElement('ul');
    // Por cada artículo un li
    listaArticulos.map( articulo => {
        const li = document.createElement('li');
        const text = document.createTextNode(articulo);
        li.appendChild(text);
    } )
}