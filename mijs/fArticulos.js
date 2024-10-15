const listaArticulos = [
    'ratón', 'teclado', 'pantalla', 'alfombrilla', 'torre CPU', 'procesador', 'tarjeta Gráfica'
];

export function listaHTML() {
    // Creamos una lista de artículos
    const ul = document.createElement('ul');
    ul.className = 'list-group';
    // Por cada artículo un li
    listaArticulos.map( articulo => {
        const li = document.createElement('li');
        const text = document.createTextNode(articulo);
        li.className = 'list-group-item';
        li.appendChild(text);
        ul.appendChild(li);
    } );
    console.log(ul);
    
    return ul;
}

