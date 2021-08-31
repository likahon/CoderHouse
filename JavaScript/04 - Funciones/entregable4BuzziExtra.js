
/* EJEMPLO CALCULAR IVA */
function calcIVA(){
    let precio = parseInt(prompt("Ingrese el precio sin IVA: "));
    let soloIVA = precio * 0.21;
    if(precio != 0){
        precioConIVA = soloIVA + precio;

        console.log("El precio con IVA es $" + precioConIVA);
    }else{
        console.log("Ingrese un valor correcto.");
    }
    
}

calcIVA();



/* EJEMPLO MULTIPLOS */
/* function multiplo(){
    let numero1 = parseInt(prompt("Ingrese el primer número: "));
    let numero2 = parseInt(prompt("Ingrese el segundo número: "));
    total = numero1 % numero2;
    
    if(total == 0){
        
        console.log("Es múltiplo." + total)
    }else{
        console.log("No es múltiplo." + total)
    }
}

multiplo(); */