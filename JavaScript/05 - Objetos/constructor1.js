function persona(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;

    this.ojos = 2;
}

const persona1 = new persona("Belen", 20, "La Plata");
const persona2 = new persona("Arturo", 28, "Bogota");
const persona3 = new persona("Nicolas", 25, "Medellin");

persona2.ojos = persona2.ojos -1;