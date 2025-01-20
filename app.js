// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo) {
        let listaAmigos = document.getElementById('listaAmigos');
        let item = document.createElement('li');
        item.textContent = nombreAmigo
        listaAmigos.appendChild(item);
        document.getElementById('amigo').value = '';
    } else {
        alert("Debe ingresar un nombre valido")
    }
}

function sortearAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    let listaResultado = document.getElementById('resultado');
    let largoLista = listaAmigos.children.length;
    let numeroRandom = Math.floor(Math.random()*largoLista);
    let nombreResultado = document.createElement('li');
    nombreResultado.textContent =  listaAmigos.children[numeroRandom].textContent;
    listaResultado.appendChild(nombreResultado);
    listaAmigos.remove();
}