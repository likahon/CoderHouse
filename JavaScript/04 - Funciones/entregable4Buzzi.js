let precio = parseInt(prompt("Ingrese el precio del producto: "));
let cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas."));


function resultadoCuotas(precio, cantCuotas){

    resultado = 0;
    resultado = precio / cantCuotas;

    switch (cantCuotas){
        case 3:
            totalCuotas = precio / 3;
            break;
        case 6:
            totalCuotas = precio / 6;
            break;
        case 12:
            totalCuotas = precio / 12;
            break;
        case 18:
            totalCuotas = precio / 18;
            break;
        case 24:
            totalCuotas = precio / 24;
            break;
        default:
            console.log("No disponible");
    }

}

resultadoCuotas(precio, cantCuotas);


console.log("Deberá abonar " + cantCuotas + " cuotas de $" + totalCuotas);