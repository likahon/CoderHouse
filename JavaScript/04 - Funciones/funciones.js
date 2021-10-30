/* function suma() {
    let numeroUno = parseInt(prompt("Ingrese el primer numero"));
    let numerodos = parseInt(prompt("Ingrese el segundo numero"));

    suma = numeroUno + numerodos;

    console.log(`La suma de ambos numeros da ${suma}`);

}

suma(); */


/* PARAMETROS */

/* let usuario = prompt("Ingrese su usuario"); */
/* let edad = prompt("Ingrese su edad");


function saludar(usuario){
    console.log(`Hola ${usuario}`);

}


function nacimiento (edad){
    anioNac = 2021 - edad;
    console.log(`Nacio en el ${anioNac}`);
}
 */

/* VALIDA SI HAY STRING VACIO */
/* function validarNombre(validarNombre){

    if(validarNombre != ''){
        console.log(`Bienvenido ${validarNombre}`);
    }else{
        console.log(`String vacio`);
    }
}

function validarEdad(validarEdad){

    if(validarEdad >= 18){

        console.log("SEEE");

    }else{

        console.log("NO");

    }
}


validarNombre(usuario);
validarEdad(edad);
nacimiento(edad);
saludar(usuario); */

let dia = prompt("Ingrese el dia de la compra");
let precio = parseInt(prompt("Ingrese el precio del producto"));



function descuento(precioSinIva, dia){
    
    if(dia == "Lunes"){

        let descuentoPrecio = precioSinIva * 0.05;
        return descuentoPrecio;

    }else if(dia == "Sabado"){

        let descuentoPrecio = precioSinIva * 0.20;
        return descuentoPrecio;
    }
}

function precioMasIva(precioSinIva){

    let iva = precioSinIva * 0.21;
    return iva;

}

let resultado = (precio - descuento(precio, dia)) + precioMasIva(precio);
console.log(resultado);