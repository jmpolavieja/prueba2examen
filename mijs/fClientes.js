
const clientesArray = [
    {id: 1, name: 'Aitor Tilla'},
    {id: 2, name: 'Dolores Fuertes'},
    {id: 3, name: 'Araceli Mon'},
    {id: 4, name: 'Domingo Loso'}
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
    clientesArray.map( cliente => {
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