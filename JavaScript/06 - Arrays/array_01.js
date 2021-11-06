/* 

const array01 = [];

const array02 = ["Arturo", "Sol", "Nicolas", "Miguel"];

const array03 = [true, 19292, "assdasd", "asdasdasd", 89.212];

const arrayNumeros = [23, 45, 80, 23, 32, 90];

console.log(array01);
console.log(array02);
console.log(array03);

let palabra = array02[3];

console.log(`El index 3 es ${palabra}`);
console.log(array02[99])

let indexSS = parseInt(prompt("Ingrese primer numero:"));
let indexTT = parseInt(prompt("Ingrese segundo numero:"));

let suma = arrayNumeros[indexSS] + arrayNumeros[indexTT];

console.log(`Suma entre index ${indexSS} (${arrayNumeros[indexSS]}) + 
                index ${indexTT} (${arrayNumeros[indexTT]}) es ${suma}`); */



/* let alumnosCoder = ["Juan", "Pedro", "Florencia", "Emanuel", "Lucas"]; */


/* PUSH suma un elemento a la ultima posicion del array*/
/* console.log(alumnosCoder);
alumnosCoder.push("Federico");
console.log(alumnosCoder); */

/* POP elimina el ultimo elemento del array*/

/* alumnosCoder.pop();
console.log(alumnosCoder); */

/* SHIFT elimina el primer elemento del array*/

/* alumnosCoder.shift();
console.log(alumnosCoder); */

/* UNSHIFT agrega un dato en el primer lugar del array */

/* alumnosCoder.unshift("Gustavo");
console.log(alumnosCoder); */

/* JOIN nos permite indicar como separar los elementos de un array */

/* console.log(alumnosCoder.join(/)); */

/* SLICE corta un array dependiendo los indices de inicio y fin que le pongamos y lo devuelve el elemento final no se tiene en cuenta*/

/* let algunosAlumnos = alumnosCoder.slice(0,4);
console.log(alumnosCoder); */

/* NESTED ARRAYS  arrays anidados y se manejan con indices y subindices*/

/* let compras = [["Tele", 200, ["Samsung", "TLC"]], ["Radio", 300], ["PC", 500]];

console.log(compras[0][0]); */

/* ARRAYS de objetos */

/* class perritos{
    constructor(nombre, duenio){
        this.nombre = nombre;
        this.duenio = duenio;
    }
}

let perritos = [
    {
        nombre: "Copetin",
        duenio: "Maxi"
    }
    {
        nombre: "Tortuga",
        duenio: "Roman" 
    }
]

console.log(perritos); */



/* class perritos{
    constructor(nombre, duenio){
        this.nombre = nombre;
        this.duenio = duenio;
    }
}

let listaDePerros = [];


for(let i=0 ; i < 5 ; i++){

    let nombrePerro = prompt("Ingrese el nombre del perro");
    let nombreDuenio = prompt("Ingrese el nombre del duenio");

    listaDePerros.push(new perritos(nombrePerro, nombreDuenio));
}

console.log(listaDePerros); */

/* FOR OF permite recorrer todo el arreglo */

/* for(let perrito of listaDePerros){

    console.log(perrito.nombre);
    console.log(perrito.duenio);

} */

class usuario{
    constructor(nombre, edad, dni){
        this.nombre: nombre;
        this.edad: edad;
        this.dni: dni;
    }
    
    esMayor(){

        /* this.edad >= 18 ? true : false; */

        if(this.edad >= 18){
            
            return true;
        }else{

            return false;

        }

    }
}

let listaVotantes = [];


for(let i=0 ; i < 2 ; i++){


        let nombre = prompt("Ingrese el nombre del votante");
        let edad = parseInt(prompt("Ingrese la edad del votante"));
        let dni = parseInt(prompt("Ingrese el dni del votante"));

        listaVotantes.push(new usuario(nombre, edad, dni));


    }

    console.log(listaVotantes);

for(let usuario of listaVotantes){

    if(usuario.esMayor(){
        console.log("El usuario puede votar");
    }else{
        console.log("El usuario no puede votarl");
    }
}