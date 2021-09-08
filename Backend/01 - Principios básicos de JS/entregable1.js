class Usuario{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        console.log(`El nombre es ${this.nombre} ${this.apellido}.`)
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombreLibro, nombreAutor){
        let libro = {
            nombre: nombreLibro,
            autor: nombreAutor
        }
        this.libros.push(libro);
    }
    getBookNames(){
        let nombresLibros = [];
        for (let index = 0; index < this.libros.length; index++) {
            nombresLibros.push(this.libros[index].nombre);
            
        }
        return nombresLibros;
    }

}


const usuario = new Usuario("Carlos", "Martinez");

usuario.getFullName();
usuario.addMascota("Firulais");
usuario.addMascota("Firulais");
console.log(usuario.countMascotas());
usuario.addBook("Nidea", "Nidea2");
usuario.addBook("Nidea2", "Nidea2");
usuario.addBook("Nidea3", "Nidea2");
usuario.addBook("Nidea4", "Nidea2");
usuario.addBook("Nidea5", "Nidea2");
console.log(usuario.getBookNames());