/* const leandro = {nombre: "Leandro", edad: 31, ciudad: "Florida"};

leandro.ciudad = "Vicente Lopez";

console.log("Mi nombre es " + leandro.nombre + ", tengo " + leandro.edad + " años y soy de " + leandro.ciudad + ".");
console.log("Mi nombre es " + leandro["nombre"] + ", tengo " + leandro["edad"] + " años y soy de " + leandro["ciudad"] + ".");

let pruebaMetodosObjetos = "Mi nombre es " + leandro["nombre"] + ", tengo " + leandro["edad"] + " años y soy de " + leandro["ciudad"] + ".";
console.log(pruebaMetodosObjetos.length); /* Nos dice el tamano del string */
/* console.log(pruebaMetodosObjetos.toLowerCase());
console.log(pruebaMetodosObjetos.toUpperCase());  */



/* function persona(nombre, edad, ciudad,) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;

    this.dedos = 10;
    this.provincia = "Catamarca";
}


const persona1 = new persona ("Leandro", 20, "Vicente Lopez");
const persona2 = new persona ("Mario Seisdedos", 25, "Vicente Lopez");
const persona3 = new persona ("Estefania", 28, "Vicente Lopez");

persona1.provincia = "Mendroza";
persona1.dedos = persona1.dedos - 3;
persona2.provincia = "Mendroza";
persona2.dedos = persona2.dedos - 4; */






/* function Goomba(nivel, altura, vida){
    this.nivel = nivel;
    this.altura = altura;
    this.vida = vida;
    
    this.eliminar = 1;

    if(this.nivel > 3) {
        this.eliminar = 2222;
    }
}



const goomba1 = new Goomba(1, 2, 10);
const goomba2 = new Goomba(1, 2, 10);
const goomba3 = new Goomba(2, 3, 10);
const goomba4 = new Goomba(2, 4, 10);
const goomba5 = new Goomba(2, 4, 10);
const goomba6 = new Goomba(1, 4, 10); */







/* function Producto(nombre, cantidad, precioXunidad){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.ganancia = 0;
    this.precioXunidad = precioXunidad;
    
    if(this.cantidad <= 0){
        this.cantidad = "Sin stock";
    }
}

const producto1 = new Producto("Jabon", 20, 200);
const producto2 = new Producto("Leche", 30, 500);
const producto3 = new Producto("Cerveza", 100, 1000);
const producto4 = new Producto("Manzana", 10, 50);

function cogerJabon(numero) {
    producto1.cantidad = producto1.cantidad - numero;
    producto1.ganancia = producto1.ganancia + (producto1.precioXunidad * numero);
}
function sumarJabon(numero) {
    producto1.cantidad = producto1.cantidad + numero;
} */






/* function persona(nombre, edad, ciudad,) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;

    this.dedos = 10;
    this.saludar = function(){console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " Anios." + this.dedos + " Dedos")}

    this.restaDedos = function() {
        this.dedos -= 1;
    }
}

const persona1 = new persona("Roberto", 37, "Tokyo");
const persona2 = new persona("Carla", 22, "Buenos Aires");
persona2.restaDedos();

persona1.saludar();
persona2.saludar(); */




/* El IN nos permite saber si la propiedad ingresada se encuentra en el objeto devolviendo un bool, ejemplo:*/
/* console.log("estudios" in persona1);
console.log("edad" in persona1);

console.log("----------------------------------------------")

for(const cualquierVariable in persona1){
    console.log(propiedad + ":" + persona1[cualquierVariable]); //El for recorre todo el objeto y nos devuelve todas las propiedades que se encuentran dentro de el y el contenido)
} */





// Una de las ventajas de las clases es que permiten modularizar, es decir, separar las propiedades de los métodos.
/* class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.dedos = 10;
    }

    hablar(){
        console.log("Hola, mi nombre es " + this.nombre + ", soy de " + this.ciudad + ", tengo " + this.edad + " años" + " y tengo " + this.dedos + " Dedos")
    }
}

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let ciudad = prompt("Ingrese la ciudad de residencia");

const persona1 = new Persona(nombre, edad, ciudad); // Podemos ingresar el nombre mediante prompt.
persona1.hablar();

for(const nombreDeCualquierVariable in persona1){
    console.log(nombreDeCualquierVariable);
} */



class Producto{
    constructor(nombre, cantidad, precioSinIva){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.ganancia = 0;
        this.precioSinIva = precioSinIva;
        this.precioConIva = this.precioSinIva * 1.21;
    }

    comprarProducto(numero){
        this.cantidad -= numero;
        this.ganancia = this.ganancia + (this.precioConIva * numero);
    }

    sumarStock(numero){
        this.cantidad += numero;
    }
}

const producto1 = new Producto ("Jabon", 30, 340);
const producto2 = new Producto ("Cerveza", 1200, 500);