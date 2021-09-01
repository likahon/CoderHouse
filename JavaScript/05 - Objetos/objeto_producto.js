function Producto(nombre, cantidad, precioXunidad){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.ganancia = 0;
    this.precioXunidad = precioXunidad;
}

const producto1 = new Producto("Jabon", 12, 500);
const producto2 = new Producto("Cerveza", 100, 1600);
const producto3 = new Producto("Manzana", 20, 200);

function cogerJabon(numero){
    producto1.cantidad = producto1.cantidad - numero;
    producto1.ganancia = producto1.ganancia +  (producto1.precioXunidad * numero);
}

function agregarJabon(numero){
    producto1.cantidad = producto1.cantidad + numero;
}