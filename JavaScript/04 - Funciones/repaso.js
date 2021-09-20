let sumaTotal = 0;
const iva = 0.21;

const sumar = x => sumaTotal = sumaTotal + x;
const calcularIva = x => x * iva;
function damePrecio(producto){

    switch (producto) {
        case "leche":
            return 200;
        case "harina":
            return 300;
        case "huevos":
            return 100;
        default:
            return 0;
    }
}

let dato = "";
do{

    dato = prompt("Ingrese producto");
    precio = damePrecio(dato);
    sumar(precio);
    console.log(sumaTotal);

}while (dato != "salir");

let calculoIva = calcularIva(sumaTotal);
let sumaTotalConIva = sumaTotal + calculoIva;


console.log("Gracias por comprar");
console.log("El saldo total es: " + sumaTotal);
console.log("El saldo total con iva es: " + sumaTotalConIva);


/* La idea es hacer un ecommerce de una tienda de pcs, donde haya un carrito que nos deje sumar productos y sacarlos, este debe:

- Sumar productos y sus precios.
- Sumar valores y mostrar total.
- Permitir sumar "ADICIONALES".

OPCIONALES:

- Metodo de pagos ficticio.
- Sistema de agendas y envios.

*/


/* function suma(numero1, numero2){
    return numero1 + numero2;
}
function resta(numero1, numero2){
    return numero1 + numero2;
}
function division(numero1, numero2){
    return numero1 + numero2;
}
function multiplicacion(numero1, numero2){
    return numero1 + numero2;
}



function calculadora(numero1, operador, numero2) {
    switch (operador) {
        case "x":
            return suma(numero1, numero2);
        case "+":
            return resta(numero1, numero2);
        case "-":
            return division(numero1, numero2);
        case "/":
            return multiplicacion(numero1, numero2);
        default:
            return "Ingrese un operador válido";
    }
    
}

console.log(calculadora(parseInt(prompt("Ingrese un numero")), prompt("Ingrese operador"), parseInt(prompt("Ingrese un numero")))); */


/* //Función anónima
const suma = function(a,b){return a + b;};
const resta = function(a,b){return a - b;};

//Función Flecha
const suma = (a,b) => {return a + b;};
const resta = (a,b) => {return a - b;};

//Función Flecha sin llaves
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

//Sin paréntesis porque solamente tiene UN parámetro
const suma = a => a + b;
const resta = a => a - b;

console.log(suma(parseInt(prompt("Ingrese un numero")), parseInt(prompt("Ingrese un numero"))));
console.log(resta(parseInt(prompt("Ingrese un numero")), parseInt(prompt("Ingrese un numero"))));
 */
