// Ejercicio 1

/* function mostrarLista(){

    if(lista == 0){
        console.log("Lista vacia");
    }else{
    }
}

// Ejercicio 2

mostrarLista([1, 2, 3]);
mostrarLista([]); */

/* (function (lista){
    if( lista.lenght === 0){
        console.log("Lista vacia")
    }else{
        console.log(lista);
    }
})([4, 5, 6]) */

// Ejercicio 3

function crearMultiplicador(num1){
    return function(num2){
        return num1 * num2;
    }
}

const duplicar = crearMultiplicador(2);

console.log(duplicar(3));
console.log(duplicar(4));

const triplicar = crearMultiplicador(3);

console.log(triplicar(3));
console.log(triplicar(4));