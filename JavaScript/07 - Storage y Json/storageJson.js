function cargaVotante() {

    let dni = parseInt(prompt("Ingrese su numero de dni"));
    let voto = prompt("Ingrese su voto");

    localStorage.setItem(dni, voto);

}

function resultado() {

    let votosA = 0;
    let votosB = 0;

    for (let i = 0; i < localStorage.length; i++) {
        
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);

        if(valor.toLocaleUpperCase() == "A"){

            votosA++;

        }else if(valor.toLocaleUpperCase() == "B"){

            votosB++;

        }else{
            alert("Voto nulo");
        }
        
    }


console.log(`Votos para A: ${votosA}`);
console.log(`Votos para B: ${votosB}`);
    
}


