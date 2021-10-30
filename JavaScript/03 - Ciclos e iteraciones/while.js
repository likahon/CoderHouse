let voto = prompt("Ingrese su voto");
let votoA;
let votoB;

while (voto != 'ESC') {

    console.log(`Voto por: ${voto}.`)

    voto = prompt("Ingrese su voto");

    if(voto == 'A' || voto == 'a'){

        votoA = votoA + 1;

    }else if(voto == 'B' || voto == 'b'){

        votoB = votoB + 1;

    }else{

        console.log("Voto nulo");

    }

    if(votoA > votoB){

        console.log("Gano el A");

    }else if(votoB > votoA){

        console.log("Gano el B");

    }

}