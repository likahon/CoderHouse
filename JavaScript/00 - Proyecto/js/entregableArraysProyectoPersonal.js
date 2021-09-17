/* const arrayProductos = [
    {id:1, producto: "Athlon 3000G", precio: 18500, categoria: "procesadores"}, 
    {id:2, producto: "A12 9800E", precio: 19500, categoria: "procesadores"},
    {id:3, producto: "Ryzen 3 3200G", precio: 32000, categoria: "procesadores"}, 
    {id:4, producto: "Ryzen 5 5600X", precio: 36800, categoria: "procesadores"}, 
    {id:5, producto: "Ryzen 7 5800G", precio: 53000, categoria: "procesadores"}, 
    {id:6, producto: "Ryzen 9 5950X", precio: 111920, categoria: "procesadores"},
    {id:6, producto: "Pentium Gold G6400", precio: 10290, categoria: "procesadores"}, 
    {id:7, producto: "Pentium Gold G6405", precio: 10300, categoria: "procesadores"}, 
    {id:8, producto: "i3 9100", precio: 22100, categoria: "procesadores"}, 
    {id:9, producto: "i5 11600K", precio: 43500, categoria: "procesadores"}, 
    {id:10, producto: "i7 11700KF", precio: 68570, categoria: "procesadores"}, 
    {id:11, producto: "i9 11900K", precio: 85500, categoria: "procesadores"},
    {id:12, producto: "Asrock A320M/HDV", precio: 5970, categoria: "motherboard"}, 
    {id:13, producto: "Asrock B550 PG", precio: 27250, categoria: "motherboard"}, 
    {id:14, producto: "ASUS TUF X570", precio: 27400, categoria: "motherboard"}, 
    {id:15, producto: "Gigabyte X570 Aorus Elite", precio: 34110, categoria: "motherboard"}, 
    {id:16, producto: "ASUS ROG Strix B550-E", precio: 38.820, categoria: "motherboard"}, 
    {id:17, producto: "ASUS ROG X570 Crosshair VIII", precio: 67380, categoria: "motherboard"},
    {id:18, producto: "Asrock H310CM-HDV", precio: 6390, categoria: "motherboard"}, 
    {id:19, producto: "Gigabyte H510M", precio: 12590, categoria: "motherboard"}, 
    {id:20, producto: "ASUS Primer B560M", precio: 16220, categoria: "motherboard"}, 
    {id:21, producto: "Gigabyte Z590i Aorus Ultra", precio: 44500, categoria: "motherboard"}, 
    {id:22, producto: "ASUS ROG Strix Z590-E", precio: 45500, categoria: "motherboard"}, 
    {id:23, producto: "Gigabyte Z590 Aorus Xtreme", precio: 120000, categoria: "motherboard"}
]; */


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
