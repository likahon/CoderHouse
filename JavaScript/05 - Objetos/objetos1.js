let nombre = "Sol";
let edad = 26;
let ciudad = "Buenos Aires";

const persona1 = {
    nombre: "Sol",
    edad: 26,
    ciudad: "Buenos Aires"
}

console.log("El nombre es: " + persona1.edad);

persona1.edad = persona1.edad +1;

console.log("La edad de " + persona1.nombre + " es:" + persona1.edad);


console.log("Hola " + persona1['nombre'] + ", tu edad es de " + persona1['edad'] + " años");

persona1['nombre'] = "Mari";
console.log(persona1);