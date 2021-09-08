class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        console.log(`El nombre es ${this.nombre} ${this.apellido}.`)
    }
    addMascota(){
        
    }
    countMascotas(){

    }
    adbook(){

    }
    getBookNames(){

    }

}


const nombre = new Usuario("Carlos", "Martinez");

nombre.getFullName();
mascotas.addMascota();