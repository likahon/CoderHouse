const auto1 = {
    marca: "Chevrolet",
    modelo: "Cruze",
    anio:"2018",
    precio: 10500,
    stock: 25
}

cantAComprar = 0;
stockTotal = 0;

function restarStock(cantAComprar, stockTotal){

    if(cantAComprar > stockTotal){

        stockTotal = auto1.stock - cantAComprar;
        console.log("Quedan disponibles: " + stockTotal + " " + auto1.marca.toUpperCase() + " " + auto1.modelo.toUpperCase());
    }else{
        console.log("El valor ingresado no es correcto.");
    }
}


console.log(restarStock(parseInt(prompt("Ingrese la cantidad a comprar.")), stockTotal));