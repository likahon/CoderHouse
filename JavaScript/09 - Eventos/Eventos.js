function listaCompras(){
    
    let valor = document.getElementById("ingresarObjeto");
    let lista = document.getElementById("lista");

    let nuevoLI = document.createElement("li");

    nuevoLI.innerHTML = `${valor.value}`;

    lista.appendChild(nuevoLI);

} 


function borrarElemento() {

    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
    
}