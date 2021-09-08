var Producto = class {
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

    }
}

let objetoProducto = new Producto(1, "Pan", 13.45);

const arrayObjetos = [objetoProducto, new Producto(12, "Leche", 15.3)]

arrayObjetos.push(new Producto(3, "Pasta", 7.8));

console.log(arrayObjetos);

for (let i = 0; i < arrayObjetos.length; i++) {

    if(arrayObjetos[i].nombre.toLowerCase() == "pasta" ) {
        console.log(`Pasta es el index ${i}`);
        break;
    }

}

const resultado = arrayObjetos.find(objeto => objeto.nombre == "Pasta");
console.log(resultado);


for(const index in arrayObjetos) {
    console.log(`${index}: ${arrayObjetos[index].nombre}`);
}

console.log("--------------------------------------------------");

for (const elemento of arrayObjetos) {
    console.log(elemento.nombre);
}