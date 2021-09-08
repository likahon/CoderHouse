const productos = [{id:1, producto: "Fideos", precio: 220}, {id:2, producto: "Pan", precio: 100}, {id:3, producto: "Arroz", precio: 70}, {id:4, producto: "Leche", precio: 135}, {id:5, producto: "Papel de cocina", precio: 300}, {id:6, producto: "Servilleta", precio: 143}];

productos.sort(function(precioA, precioB){
return (precioA.precio - precioB.precio);
});

console.log(productos);