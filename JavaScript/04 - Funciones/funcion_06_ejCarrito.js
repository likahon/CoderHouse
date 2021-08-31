let sumaTotal = 0;
const iva = 0.21;

const sumar = x => sumaTotal = sumaTotal + x;
const calcularIva = x => x * iva;
const damePrecio = (producto) => {

    switch (producto){
        case "leche":
            return 3000;
        case "harina":
            return 2500;
        case "huevos":
            return 300;
        default:
            return 0;
    }

}

let dato = "";
do {

    dato = prompt("Ingrese producto: ");

    precio = damePrecio(dato);
    sumar(precio);

    console.log(sumaTotal);


} while(dato != "salir")




let numeroIVA = calcularIva(sumaTotal);
let totalConIVA = sumaTotal + numeroIVA;

console.log("Se termina la compra");
console.log("El total es: " + sumaTotal);
console.log("El total es: " + totalConIVA);