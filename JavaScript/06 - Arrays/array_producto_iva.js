class Producto {

    constructor(nombre, precio, vendido) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = vendido;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

}

const carritoDeCompra = [];

carritoDeCompra.push(new Producto("Pan", 3000, true));
carritoDeCompra.push(new Producto("Leche", 5500, true));
carritoDeCompra.push(new Producto("Pasta", 750, false));
carritoDeCompra.push(new Producto("Arroz", 2200, true));

for (const product of carritoDeCompra)
    if (product.vendido)
        product.sumaIva();


console.log(carritoDeCompra);