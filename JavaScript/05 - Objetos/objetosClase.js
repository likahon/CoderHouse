// OBJETOS LITERALES
/* let alumnoCoder{
    nombre: "El Pepe",
    edad: 29,
    nota: 10
}

let alumnoCoder2{
    nombre: "El Carlo",
    edad: 44,
    nota: 10
}

console.log(alumnoCoder);
console.log(alumnoCoder2);

console.log(alumnoCoder.nombre);
console.log(alumnoCoder2.nombre); */





//OBJETOS CON CONSTRUCTOR
/* function peliculas(nombre, director, duracion,fecha) {
    
    this.nombre = nombre;
    this.director = director;
    this.duracion = duracion;
    this.fecha = fecha;

    this.datosPeli = function(){
        console.log(`El nombre de la pelicula es ${this.nombre}`);
        console.log(`El nombre del director de la pelicula es ${this.director}`);
        console.log(`La duracion de la pelicula es ${this.duracion}`);
        console.log(`La fecha de estreno de la pelicula es ${this.fecha}`);
    }
}

let titanic = new peliculas("Titanic", "George M", 600, "03/07/1934"); */

/* console.log(`La película es ${titanic.nombre} y su director fue ${titanic.director}`);

let nombrePeli = prompt("Ingrese el nombre de la pelicula");
let directorPeli = prompt("Ingrese el nombre del director de la pelicula");
let duracion = prompt("Ingrese la duracion de la pelicula");
let fecha = prompt("Ingrese la fecja de estrenno de la pelicula");

let pelicula = new peliculas(nombrePeli, directorPeli, duracion, fecha); */

/* let pelicula = new peliculas("Matrix", "Suar", 80, 1990);

pelicula.datosPeli(); */





/* FOR IN */
/* function gatito(nombre, duenio, edad) {
    this.nombre = nombre;
    this.duenio = duenio;
    this.edad = edad;

    this.saludar = function(){
        console.log(`${this.nombre} dice: Miauuuuu`)
    }

    this.edadGatuna = function(){
        return this.edad * 7;
    }
}

let matute = new gatito("Matute", "Lean", 10);

matute.saludar();
matute.edadGatuna();

for(let datos in matute){
    console.log(matute[datos]);
} */


/* CLASES */
/* class perritos{
    constructor(nombre, edad, duenio, ladrido){
        this.nombre = nombre;
        this.edad = edad;
        this.duenio = duenio;
        this.ladrido = ladrido;
    }
    ladrar(){
        console.log(`${this.nombre} dice: ${this.ladrido}`);
    }
}

let nuevoPerrito = new perritos(nombrePerrito, 7, "Maxi", "Guau Guau")

console.log(nuevoPerrito);
nuevoPerrito.ladrar(); */


/* Videojuegos llega nombre, empresa que lo creo, precio y clasificacion */

class videoJuegos{
    constructor(nombre, creador, precio, clasificacion, stock){

        this.nombre = nombre;
        this.empresa = creador;
        this.precio = precio;
        this.clasificacion = clasificacion;
        this.stock = stock;

    }

    precioFinal(){

        return this.precio * 0.21;
    }

    updateStock(){
        this.stock = this.stock -1;
    }

    getStock(){

        return this.stock:

    }


}

let gtaV = new videoJuegos("GTA V", "Rockstar", 2000 , "PG+16", "Guau Guau", 20);

console.log(`Stock antes de la venta: ${gtaV.stock}`);
console.log(`El precio final es: ${gtaV.precioFinal()}`);

if(gtaV.getStock != 0){

    console.log(`Gracias por comprar ${gtaV.nombre}`);
    gtaV.updateStock();
    console.log(`Stock despues de la venta: ${gtaV.stock}`);

}