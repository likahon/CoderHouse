class Animal{
    constructor(
        this.nombre = nombre;
    ){}

    saludar(){
        console.log(this.nombre);
    }
}

const a1 = new Animal("Pepe");
const a2 = new Animal("Carlos");
const a3 = new Animal("Alberto");

a1.saludar();
a2.saludar();