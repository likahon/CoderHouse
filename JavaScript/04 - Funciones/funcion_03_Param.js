/* LOS PARAMETROS QUE SE DECLAREN EN EL PARENTESIS DEL NOMBRE DE LA FUNCIÓN SOLAMENTE PODRAN UTILIZARSE DENTRO DE LA MISMA. EJEMPLO:


function saludoEspecifico(nombre, apellido){
    bla bla bla bla bla bla bla bla
}

let nombre = prompt("Ingrese el nombre");

saludoEspecifico();
*/

/* let resultado = 0;


function suma(primerNumero, segundoNumero){
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje){
    console.log("-------" + mensaje + "--------");
}

primerNumero = parseInt(prompt("Primer número: "));
segundoNumero = parseInt(prompt("Primer número: "));

suma(primerNumero, segundoNumero);
mostrar(resultado); */




/* function suma(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    
    return resultado;
}

function mostrar(mensaje){
    console.log("-------" + mensaje + "--------");
}

primerNumero = parseInt(prompt("Primer número: "));
segundoNumero = parseInt(prompt("Primer número: "));

let r = suma(primerNumero, segundoNumero);
mostrar(r); */


/* CALCULADORA */

/* function calculadora(numero01, numero02, operacion) {
    switch (operacion) {
        case "+":
            return numero01 + numero02;
            break;
        case "-":
            return numero01 - numero02;
            break;
        case "*":
            return numero01 * numero02;
            break;
        case "/":
            return numero01 / numero02;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 115, "*")); */


function suma(numero01, numero02){
    return numero01 + numero02;
}

function resta(numero01, numero02){
    if(numero01 >= numero02){
        return numero01 - numero02;
    }else{
        return numero02 - numero02;
    }
}

function multiplicador(numero01, numero02){
    return numero01 * numero02;
}

function division(numero01, numero02){
    if(numero02 == 0){
        console.log("No se puede dividir entre 0");
        return 0;
    }
    return numero01 / numero02;
}

function calculadora(numero01, numero02, operacion) {
    switch (operacion) {
        case "+":
            return suma(numero01, numero02);
            break;
        case "-":
            return resta(numero01, numero02);
            break;
        case "*":
            return multiplicador(numero01, numero02);
            break;
        case "/":
            return division(numero01, numero02);
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 0, "/"));