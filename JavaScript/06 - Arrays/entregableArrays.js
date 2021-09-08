const procAMD = [
    {id:1, producto: "Athlon 3000G", precio: 18.500}, 
    {id:2, producto: "A12 9800E", precio: 19500}, 
    {id:3, producto: "Ryzen 3 3200G", precio: 32000}, 
    {id:4, producto: "Ryzen 5 5600X", precio: 36800}, 
    {id:5, producto: "Ryzen 7 5800G", precio: 53000}, 
    {id:6, producto: "Ryzen 9 5950X", precio: 111920}
];

const procINTEL = [
    {id:1, producto: "Pentium Gold G6400", precio: 10290}, 
    {id:2, producto: "Pentium Gold G6405", precio: 10300}, 
    {id:3, producto: "i3 9100", precio: 22100}, 
    {id:4, producto: "i5 11600K", precio: 43500}, 
    {id:5, producto: "i7 11700KF", precio: 68570}, 
    {id:6, producto: "i9 11900K", precio: 85500}
];

const motherAMD = [
    {id:1, producto: "Asrock A320M/HDV", precio: 5970}, 
    {id:2, producto: "Asrock B550 PG", precio: 27250}, 
    {id:3, producto: "ASUS TUF X570", precio: 27400}, 
    {id:4, producto: "Gigabyte X570 Aorus Elite", precio: 34110}, 
    {id:5, producto: "ASUS ROG Strix B550-E", precio: 38.820}, 
    {id:6, producto: "ASUS ROG X570 Crosshair VIII", precio: 67380}
];

const motherINTEL = [
    {id:1, producto: "Asrock H310CM-HDV", precio: 6390}, 
    {id:2, producto: "Gigabyte H510M", precio: 12590}, 
    {id:3, producto: "ASUS Primer B560M", precio: 16220}, 
    {id:4, producto: "Gigabyte Z590i Aorus Ultra", precio: 44500}, 
    {id:5, producto: "ASUS ROG Strix Z590-E", precio: 45500}, 
    {id:6, producto: "Gigabyte Z590 Aorus Xtreme", precio: 120000}
];






/* La idea es hacer un ecommerce de una tienda de pcs, donde haya un carrito que nos deje sumar productos y sacarlos, este debe:

- Sumar productos y sus precios.
- Sumar valores y mostrar total.
- Permitir sumar "ADICIONALES".

OPCIONALES:

- Metodo de pagos ficticio.
- Sistema de agendas y envios.

*/