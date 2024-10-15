
const clientesArray = [
    {id: 1, name: 'Aitor Tilla', categoria: 'A'},
    {id: 2, name: 'Dolores Fuertes', categoria: 'B'},
    {id: 3, name: 'Araceli Mon', categoria: 'A'},
    {id: 4, name: 'Domingo Loso', categoria: 'C'}
];

export function listaClientes() {
    // Lo voy a enviar como tabla
    const table = document.createElement('table');
    table.classList="table";
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = 'Id';
    tr.appendChild(th1);
    const th2 = document.createElement('th');
    th2.innerText = 'Name';
    tr.appendChild(th2);
    table.append(tr);
    clientesArray.forEach( cliente => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = cliente.id;
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.innerText = cliente.name;
        tr.appendChild(td2);
        table.appendChild(tr);
    } );
    return table;
}

export function descuentosHTML() {
    // Crea una listado (ul) de clientes con sus descuentos
    const ul = document.createElement('ul');
    ul.className = 'list-group';
    clientesArray.forEach( cliente => {
        // Crea un elemento li por cada cliente
        const li = document.createElement('li');
        li.className = 'list-group-item';
        // Averiguo cual es el descuento que le corresponde
        let dto = '';
        switch (cliente.categoria) {
            case 'A':
                dto = '20%';
                break;
            case 'B':
                dto = '10%';
                break;
            case 'C':
                dto = '5%';
                break
        }
        li.innerHTML = cliente.name + ' - descuento: ' + dto;
        ul.appendChild(li);
    } );
    return ul;
}

export function descuentos() {
    // Crea un array con el nombre y el descuento de cada cliente
    const categoriasDescuento = clientesArray.map( cliente => {
        let dto = '';
        switch (cliente.categoria) {
            case 'A':
                dto = '20%';
                break;
            case 'B':
                dto = '10%';
                break;
            case 'C':
                dto = '5%';
                break
        }
        const objetoCliente = { nombre: cliente.name, descuento: dto }
        return objetoCliente;
    } );
    console.log(categoriasDescuento);
    return categoriasDescuento;
}