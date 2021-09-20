    {id:12, producto: "Asrock A320M/HDV", precio: 5970, categoria: "motherboard"}, 
    {id:13, producto: "Asrock B550 PG", precio: 27250, categoria: "motherboard"}, 
const arrayProductos = [
    {id:1, marca: "AMD" ,modelo: "Athlon 3000G", precio: 18500, categoria: "procesadores"}, 
    {id:2, marca: "AMD" ,modelo: "A12 9800E", precio: 19500, categoria: "procesadores"},
    {id:3, marca: "AMD" ,modelo: "Ryzen 3 3200G", precio: 32000, categoria: "procesadores"}, 
    {id:4, marca: "AMD" ,modelo: "Ryzen 5 5600X", precio: 36800, categoria: "procesadores"}, 
    {id:5, marca: "AMD" ,modelo: "Ryzen 7 5800G", precio: 53000, categoria: "procesadores"}, 
    {id:6, marca: "AMD" ,modelo: "Ryzen 9 5950X", precio: 111920, categoria: "procesadores"},
    {id:6, marca: "Intel" ,modelo: "Pentium Gold G6400", precio: 10290, categoria: "procesadores"}, 
    {id:7, marca: "Intel" ,modelo: "Pentium Gold G6405", precio: 10300, categoria: "procesadores"}, 
    {id:8, marca: "Intel" ,modelo: "i3 9100", precio: 22100, categoria: "procesadores"}, 
    {id:9, marca: "Intel" ,modelo: "i5 11600K", precio: 43500, categoria: "procesadores"}, 
    {id:10, marca: "Intel" ,modelo: "i7 11700KF", precio: 68570, categoria: "procesadores"}, 
    {id:11, marca: "Intel" ,modelo: "i9 11900K", precio: 85500, categoria: "procesadores"},
    {id:12, marca: "Asrock" ,modelo: "Asrock A320M/HDV", precio: 5970, categoria: "motherboard"}, 
    {id:13, marca: "Asrock" ,modelo: "Asrock B550 PG", precio: 27250, categoria: "motherboard"}, 
    {id:14, marca: "Asus" ,modelo: "ASUS TUF X570", precio: 27400, categoria: "motherboard"}, 
    {id:15, marca: "Gigabyte" ,modelo: "Gigabyte X570 Aorus Elite", precio: 34110, categoria: "motherboard"}, 
    {id:16, marca: "Asus" ,modelo: "ASUS ROG Strix B550-E", precio: 38.820, categoria: "motherboard"}, 
    {id:17, marca: "Asus" ,modelo: "ASUS ROG X570 Crosshair VIII", precio: 67380, categoria: "motherboard"},
    {id:18, marca: "Asrock" ,modelo: "Asrock H310CM-HDV", precio: 6390, categoria: "motherboard"}, 
    {id:19, marca: "Gigabyte" ,modelo: "Gigabyte H510M", precio: 12590, categoria: "motherboard"}, 
    {id:20, marca: "Asus" ,modelo: "ASUS Primer B560M", precio: 16220, categoria: "motherboard"}, 
    {id:21, marca: "Gigabyte" ,modelo: "Gigabyte Z590i Aorus Ultra", precio: 44500, categoria: "motherboard"}, 
    {id:22, marca: "Asus" ,modelo: "ASUS ROG Strix Z590-E", precio: 45500, categoria: "motherboard"}, 
    {id:23, marca: "Gigabyte" ,modelo: "Gigabyte Z590 Aorus Xtreme", precio: 120000, categoria: "motherboard"}
];



let categoria = parseInt(prompt(`
        Seleccione una categoría:
        1. Procesadores
        2. Motherboards
`));

switch (categoria) {
    case 1:
        for(const categoriaProduct of arrayProductos){
            console.log(categoriaProduct.modelo);
        }
        break;
    case 2:
        for(const categoriaProduct of arrayProductos){
            console.log(categoriaProduct.modelo);
        }
        break;

    default:
        console.log("No seleccionó una categoría válida.")
        break;
}