let listaSpesa = [
    'pane',
    'formaggio',
    'insalata'
]

let lista = document.querySelector('.lista');

let i = 0

while (i < listaSpesa.length) {
    let li = document.createElement('li');
    lista.appendChild(li);
    li.textContent = listaSpesa[i];
    i++;
}


function insert() {
    let item = document.querySelector('#item').value;
    let li = document.createElement('li');
    listaSpesa.push(item);

    while (i < listaSpesa.length) {
    let li = document.createElement('li');
    lista.appendChild(li);
    li.textContent = item;
    i++;  
}
} 

