let publicaciones = [
    {titulo:"Clima", parrafo: "Hoy va a estar soleado"}
];

function generarTitulos() {
    let titulo = document.getElementById("tituloPubli");
    titulo.innerHTML = `

            ${publicaciones[0]['titulo']}
        
        `
}

function generarParrafos() {

    let titulo = document.getElementById("parrafoPubli");
    titulo.innerHTML = `
    
            ${publicaciones[0]['parrafo']}
        
        `
}

let insertarTitulos = document.getElementById("insertarTitulo");
insertarTitulos.addEventListener("click", function insertarParrafoYTitulo() {
    generarParrafos();
    generarTitulos();
});