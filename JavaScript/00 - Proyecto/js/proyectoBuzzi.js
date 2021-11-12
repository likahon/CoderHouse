
function calcularIntereses(monto, cuotas){
    
    let intereses;

    /* if(cuotas == 3){
        intereses = monto * 0.10;
        return intereses;
    }else if(cuotas == 6){
        intereses = monto * 0.30;
        return intereses;
    }else if(cuotas == 12) {
        intereses = monto * 0.30;
        return intereses;
    } */

    switch (cuotas) {
        case 3:
            intereses = monto * 0.10;
            return intereses;
            break;

        case 6:
            intereses = monto * 0.10;
            return intereses;
            break;

        case 6:
            intereses = monto * 0.10;
            return intereses;
            break;
    
        default:
            
            break;
    }

}


let monto = parseInt(prompt("ingrese el monto deseado"));
let cuotas = parseInt(prompt("ingrese la cantidad de cuotas: 3 / 6 / 12"));

let precioTotal = monto + calcularIntereses(monto, cuotas);

alert(precioTotal);