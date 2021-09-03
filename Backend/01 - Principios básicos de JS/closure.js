function crearSaludar(nombre){
    function saludar() {
        console.log("Hola " + nombre);
    }
    return saludar
}

const fsaludar1 = crearSaludar('Mariano');
const fsaludar2 = crearSaludar('Carlitos');

fsaludar1();
fsaludar2();
