function calcularNota(nombreAlumno, nota1, nota2, nota3){

    let sumaNotas = nota1 + nota2 + nota3;
    let promedio = sumaNotas / 3;

    if(promedio >= 7){
        alert(`El estudiante ${nombreAlumno} ha aprobado con nota:${promedio}`);
    }else if(promedio >= 4){
        alert(`${nombreAlumno} vas a final, no todo está perdido.`);
    }else{
        alert(`${nombreAlumno} recursas, bro.`);
    }
}

    
let nombreAlumno = prompt("Ingrese el nombre del alumno");
let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));
let nota3 = parseInt(prompt("Ingrese la nota del tercero trimestre"));


calcularNota(nombreAlumno, nota1, nota2, nota3);



/* EJEMPLO 2 */



let valorCarrito = 0;

function sumaProducto(producto){
    switch(producto){
        case "banana":
            valorCarrito = valorCarrito + 100;
            console.log("Producto agregado: Banana");
            console.log(valorCarrito);
            break;
        case "manzana":
            valorCarrito += 50;
            console.log("Producto agregado: Manzana");
            console.log(valorCarrito);
            break;
        case "pera":
            valorCarrito += 30;
            console.log("Producto agregado: Pera");
            console.log(valorCarrito);
            break;

        default:
            console.log("No ingresaste fruta.");
    }
}