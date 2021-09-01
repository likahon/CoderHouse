function Persona(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;

    this.ojos = 2;
    this.saludar = function(){
        console.log("Hola a todos, mi nombre es " + this.nombre);
    }
}
const persona1 = new Persona("Arturo", 28, "Cartagena");
const persona2 = new Persona("Manuel", 32, "New York");

persona1.saludar();
persona2.saludar();

for(const propiedad in persona1){
    console.log(propiedad + ": " + persona1[propiedad]);
}